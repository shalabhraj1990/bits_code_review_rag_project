from rest_framework import serializers

from vericode_app.Model import ApiRequest
from vericode_app.Model.LlmModel import LlmModel
from vericode_app.Model.SourceDocument import SourceDocument
from vericode_app.models import LlmModels


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
    sourceDocuments = SourceDocumentSerializer(many=True)
    question = serializers.CharField()
    chatId = serializers.CharField()
    chatMessageId = serializers.CharField()
    isStreamValid = serializers.BooleanField()
    sessionId = serializers.CharField()
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
