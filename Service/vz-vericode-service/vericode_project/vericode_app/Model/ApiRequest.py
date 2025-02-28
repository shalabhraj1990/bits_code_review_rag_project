from vericode_app.Model.ModelName import ModelName
import json

class ApiRequest:
    # def __init__(self, model_name, question):
    #     self.model_name = model_name
    #     self.question = question

    def __init__(self, model_name: ModelName, question: str):
        self.model_name = model_name
        self.question = question


    def to_dict(self):
        return {
            "model_name": self.model_name.value,
            "question": self.question
        }

    def to_json(self):
        return json.dumps(self.to_dict())
