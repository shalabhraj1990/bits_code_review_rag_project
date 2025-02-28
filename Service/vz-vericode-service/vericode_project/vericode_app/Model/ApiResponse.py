from vericode_app.Model import LlmModel


class ApiResponse:
    def __init__(self, name: str="", response: LlmModel=None, status: str=""):
        self.name = name
        self.response = LlmModel
        self.status = status
