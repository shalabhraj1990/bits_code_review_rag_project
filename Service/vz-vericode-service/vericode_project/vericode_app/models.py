from django.db import models

class LlmModels(models.Model):
    model_id = models.AutoField(primary_key=True)
    model_name = models.CharField(max_length=500)
    model_url = models.EmailField(max_length=1000)


    def __str__(self):
        return self.model_id + self.model_name + " - " + self.model_url

class SummarizeLlmModels(models.Model):
    model_id = models.AutoField(primary_key=True)
    model_name = models.CharField(max_length=500)
    model_url = models.EmailField(max_length=1000)


    def __str__(self):
        return self.model_id + self.model_name + " - " + self.model_url

