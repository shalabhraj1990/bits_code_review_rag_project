from abc import ABC, abstractmethod

from vericode_app.Serializer.Serializer import LlmModelSerializer


class ServiceI(ABC):
    @abstractmethod
    def get_data(self):
        pass

    @abstractmethod
    def post_data(self,request) -> LlmModelSerializer:
        pass