from rest_framework import serializers 
from .models import Question
class musicserializer(serializers.ModelSerializer) : 
    class Meta :
        model = musicserializer      # Question 모델 사용 
        fields = '__all__'           # 모든 필드 포함