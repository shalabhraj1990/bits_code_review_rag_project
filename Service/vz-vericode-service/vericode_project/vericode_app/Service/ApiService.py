import requests

from vericode_app.Interface.ServiceI import ServiceI
from vericode_app.Serializer.Serializer import LlmModelSerializer


class ApiService(ServiceI):
    def get_data(self):
        pass

    def post_data(self, request,model_url=''):
        url = model_url
        headers = {
            "Content-Type": "application/json",
        }
        payload = {
            "question": request.question
        }

        response = requests.post(url, json=payload, headers=headers)
        llmModelSerializer = LlmModelSerializer()
        if response.status_code == 200:
            response_data = response.json()
            serializer = LlmModelSerializer(data=response_data)
            return serializer

        return llmModelSerializer



