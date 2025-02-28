from vericode_app.Model.SourceDocument import SourceDocument
import json

class LlmModel:
    def __init__(self, text="", sourceDocuments=None, question="", chatId="", chatMessageId="", isStreamValid=False,
                 sessionId="", statusCode="", message="", model_name=""):
        self.text = text
        self.sourceDocuments = [SourceDocument(**doc) for doc in sourceDocuments] if sourceDocuments else []
        self.question = question
        self.chatId = chatId
        self.chatMessageId = chatMessageId
        self.isStreamValid = isStreamValid
        self.sessionId = sessionId
        self.statusCode = statusCode
        self.message = message
        self.model_name = model_name

    def to_dict(self):
        return {
            "text": self.text,
            "sourceDocuments": [doc.to_dict() for doc in self.sourceDocuments],
            "question": self.question,
            "chatId": self.chatId,
            "chatMessageId": self.chatMessageId,
            "isStreamValid": self.isStreamValid,
            "sessionId": self.sessionId,
            "statusCode": self.statusCode,
            "message": self.message,
            "model_name": self.model_name
        }

    def to_json(self):
        return json.dumps(self.to_dict())
