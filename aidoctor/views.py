from django.shortcuts import render
from django.shortcuts import render, get_object_or_404, redirect

from django.http import HttpResponse, JsonResponse
from gpt_post import GPT
from dalle import DallE
from transparent import transparent

# Create your views here.


from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.response import Response

feeling_dict = {1:"기쁨", 2: "슬픔", 3:"분노", 4:"행복", 5:"불안", 6:"두려움"}
gpt = GPT()
dalle = DallE()

def index(request):
    return JsonResponse({"data":"test data"})

@api_view(["GET", "POST"])
def picture_selection(request, feeling):
    feeling_word = feeling_dict[feeling]
    print(feeling_word)
    #단어 쉼표로 구분해서 받기
    selected_str = gpt.select_pictures(feeling_word)
    gpt.words_to_list(selected_str)
    #for문 써서 딕셔너리 형태로 만들기 사물이름 - 사진 key-value로 전송
    
    answer = []
    for word in gpt.words_list:
        picture_dict = {}
        picture_dict["word"] = word 
        picture_dict["picture_url"] = dalle.generate(word)
        answer.append(picture_dict)
    print(answer)
    
    return Response(answer)

@api_view(["GET", "POST"])
def get_instruction(request):
    instruction  = ""
    words = []
    pictures = []

    #key-word, value-사진
    word_picture_dict = {}
    #key-word, value-위치
    word_position_dict = {}
    #key-사진 url, value-위치
    picture_position_dict = {}
    for data in request.data:
        print(request.data, type(request.data))
        print(request.data[0].get('word'))
        word = data.get('word')
        picture = data.get('picture_url')

        words.append(data.get('word'))
        pictures.append(data.get('picture_url'))

        word_picture_dict[word] = picture
        #request.data에서 사물이름 추출 -> gpt가 위치 지정, 사진주소 추출 -> gpt 명령대로 콜라주 배치 
    instruction = gpt.make_instruction_set("", words)
    word_position_dict = gpt.instruction_to_dict(instruction)
    
    for word in word_position_dict.keys():
        picture_url = word_picture_dict[word]
        position = word_position_dict[word]
        picture_position_dict[picture_url] = position 
    
    print(picture_position_dict)

    gpt.post_pictures(picture_position_dict)
    #transparent()    

    return HttpResponse("collage success")