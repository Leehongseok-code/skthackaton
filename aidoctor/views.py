from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from gpt_post import GPT
# Create your views here.


from rest_framework.renderers import JSONRenderer


feeling_dict = {1:"기쁨", 2: "슬픔", 3:"분노", 4:"행복", 5:"불안", 6:"두려움"}
gpt = GPT()

def index(request):
    return JsonResponse({"data":"test data"})

def pic_select(request, feeling):
    feeling_word = feeling_dict[feeling]
    #단어 쉼표로 구분해서 받기
    selected_str = gpt.select_pictures(feeling_word)
    gpt.words_to_list(selected_str)
    #for문 써서 딕셔너리 형태로 만들기 사물이름 - 사진 key-value로 전송
    JSONRenderer().render(#여기다가 딕셔너리 넣기#)

