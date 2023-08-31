from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('<int:feeling>/', views.picture_selection),
    path('collage/', views.get_instruction),
]
