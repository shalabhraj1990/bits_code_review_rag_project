

from vericode_app.Model.ApiRequest import ApiRequest
from vericode_app.Model.LlmModel import LlmModel
from vericode_app.Serializer.Serializer import ApiRequestSerializer, LlmModelSerializer, LlmModelsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import JsonResponse
from vericode_app.Service.ApiService import ApiService
from vericode_app.Service.ModelMapper import ModelMapper
from vericode_app.models import LlmModels


@api_view(['GET'])# Create your views here.
def getLlmModels(request):
    if request.method == 'GET':
        llmModels = LlmModels.objects.all()
        serializer = LlmModelsSerializer(llmModels, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)



class GetLlmModelsView(APIView):
    def __init__(self, api_service=None,model_mapper=None, *args, **kwargs):
        self.api_service = api_service or ApiService()
        self.model_mapper = model_mapper or ModelMapper()
        super().__init__(*args, **kwargs)

    def get(self, request, *args, **kwargs):
        return Response(status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        apiRequestSerializer = ApiRequestSerializer(data=request.data)
        if apiRequestSerializer.is_valid():
            llmModels = LlmModels.objects.all()
            serializer = LlmModelsSerializer(llmModels, many=True)
            models = serializer.data;


            apiRequest = ApiRequest(**apiRequestSerializer.validated_data)
            model_url = None
            if models and apiRequest:
                filtered_models = [model for model in models if model['model_name'].lower() == apiRequest.model_name.lower()]
                model_url = filtered_models[0]['model_url'] if filtered_models else None

            llmModelSerializer = self.api_service.post_data(apiRequest,model_url)
            if llmModelSerializer.is_valid():
                llmModel = LlmModel(**llmModelSerializer.validated_data)
                llmModel.model_name = apiRequest.model_name
                apiResponse = llmModel.to_dict()
                return JsonResponse(apiResponse, status=status.HTTP_200_OK)
            return Response(llmModelSerializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(apiRequestSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

