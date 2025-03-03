"""
URL configuration for vericode_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path,include
from vericode_app import views
from vericode_app.views import GetLlmModelsView, GetMergeModelsView

urlpatterns = [
    path('get-models/', views.getLlmModels,name='get-models'),
    path('get-summarize-models/', views.getSummarizeLlmModels,name='get-models'),
    path('get-model-response/', GetLlmModelsView.as_view(), name='get-model-response'),
    path('get-merge-response/', GetMergeModelsView.as_view(), name='get-merge-response'),
]
