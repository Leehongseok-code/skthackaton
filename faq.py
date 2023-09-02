def get_faq():
    a = "콜라주 예시를 똑같이 따라해야하나요?"
    b = "아닙니다. 자유롭게 배치가능합니다"
    c = "사용 과정에서 아이와의 의사소통을 할때 권장하는 행동이 있을까요?"
    d = "아동이 시도하는 모든 말을 반복하여 따라말해주신다면 아이의 소통 능력 향상에 도움이 됩니다."
    e = "감정 선택시 랜덤으로 보호자가 선택해도 되나요?"
    f = "네, 감정 선택 시 보호자가 랜덤으로 선택해도 괜찮습니다."
    g = "청각이 예민한 자녀라 음악이 안나오게 하고 싶은데 어떻게 해야하나요?"
    h = "서비스 사용 전에 소리를 끄고 사용해주시길 바랍니다."

    qa = [{"question":a, "answer":b}, {"question":c, "answer":d},{"question":e,"answer":f},{"question":g,"answer":h}]

    i = "게시판에 게시할때 콜라주 결과 이외의 사진을 올려도 되나요? "
    j = "물론입니다.서비스 활용 전반에 관련된 사진은 모두 업로드 가능합니다."
    k = "회원 가입을 했는데 뉴스레터가 안와요."
    l = "뉴스레터는 홈페이지 하단에 이메일란에 주소를 입력해주시면 전송됩니다."
   
    qa = {"data":[{"qustion":a, "answer":b}, {"question":c, "answer":d},{"question":e,"answer":f},{"question":g,"answer":h},{"question":i, "answer":j},{"question":k,"answer":l}]}


    print(qa)
    return qa