from rest_framework import serializers

from vericode_app.Model import ApiRequest
from vericode_app.Model.LlmModel import LlmModel
from vericode_app.Model.SourceDocument import SourceDocument
from vericode_app.models import LlmModels, SummarizeLlmModels


class SourceDocumentSerializer(serializers.Serializer):
    # class Meta:
    #     model = SourceDocument
    #     fields = "__all__"
    pageContent = serializers.CharField()
    metadata = serializers.DictField()
    id = serializers.CharField()


class LlmModelSerializer(serializers.Serializer):
    # class Meta:
    #     model = LlmModel
    #     fields = "__all__"
    text = serializers.CharField()
    sourceDocuments = SourceDocumentSerializer(many=True,required=False)
    question = serializers.CharField(required=False)
    chatId = serializers.CharField(required=False)
    chatMessageId = serializers.CharField(required=False)
    isStreamValid = serializers.BooleanField(required=False)
    sessionId = serializers.CharField(required=False)
    statusCode = serializers.CharField(required=False)
    message = serializers.CharField(required=False)
    model_name = serializers.CharField(required=False)


class ApiRequestSerializer(serializers.Serializer):
    question = serializers.CharField()
    model_name = serializers.CharField()

# class ApiRequestSerializer(serializers.Serializer):
#     model_name = serializers.ChoiceField(choices=[model.value for model in ModelName])
#     question = serializers.CharField()
#
#     def create(self, validated_data):
#         model_name = ModelName(validated_data['model_name'])
#         return ApiRequest(model_name=model_name, question=validated_data['question'])


class ApiResponseSerializer(serializers.Serializer):
    name = serializers.CharField()
    response = LlmModelSerializer()
    status = serializers.CharField()


class LlmModelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LlmModels
        fields = "__all__"

class SummarizeLlmModelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummarizeLlmModels
        fields = "__all__"
