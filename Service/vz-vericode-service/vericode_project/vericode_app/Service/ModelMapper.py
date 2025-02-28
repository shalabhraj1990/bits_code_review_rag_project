

from vericode_app.Interface.ModelMapperI import ModelMapperI
from vericode_app.Model.ApiResponse import ApiResponse



class ModelMapper(ModelMapperI):
    def map(self, llmModel, apiRequest):
        return ApiResponse(name=apiRequest.model_name, response=llmModel, status=llmModel.statusCode)

