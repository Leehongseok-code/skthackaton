from datetime import date, datetime

newsletter_title = "발달 장애인 부모 교육 및 상담 뉴스레터"
newsletter_date = datetime.now().strftime("%Y-%m-%d")
newsletter_contents = [
    {
        "center_name": "동행발달재활센터",
        "location": "전라남도 여수시",
        "services": "발달장애인 부모 및 보호자에게 개별/집단 상담 제공"
    },
    {
        "center_name": "행복나눔심리발달재활센터",
        "location": "충청북도 제천시",
        "services": "발달장애인 보호자를 위한 상담 서비스"
    },
    {
        "center_name": "(사)한국아동발달지원연구소",
        "location": "대전광역시 서구",
        "services": "자녀의 생애주기별에 따른 영유아 발달장애인 부모교육"
    }
]