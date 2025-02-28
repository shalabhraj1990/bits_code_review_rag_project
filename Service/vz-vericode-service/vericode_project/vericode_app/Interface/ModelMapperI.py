from abc import ABC, abstractmethod

from vericode_app.Model import ApiResponse, ApiRequest
from vericode_app.Model.LlmModel import LlmModel


class ModelMapperI(ABC):
    @abstractmethod
    def map(self,llmModel:LlmModel,apiRequest:ApiRequest) -> ApiResponse:
        pass