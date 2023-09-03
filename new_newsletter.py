import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import date, datetime
from mail import MAIL_FORMAT, STYLES
from news_scrap import get_news_table


def NewsLetter(email_address=""):
    if email_address == "":
        return
    msg = MIMEMultipart('html')
    msg['Subject'] = f'{date.today().strftime("%m/%d/%Y")}의 메일'
    msg['From'] = 'lhs27733182@gmail.com'
    msg['To'] = 'myunghee1231@naver.com'

    #news_table = get_news_table()


    NEW_MAIL_FORMAT = '''
    <section>
        안녕하세요. 정서랑의 뉴스레터 서비스를 이용해주셔서 감사합니다.
        자폐 아동의 학부모 상담 및 지원 센터의 위치 및 링크를 아래에서 확인하세요:
        <h2>센터 정보</h2>
        <ul>
            <li>
                <a href = "http://www.together63.kr/bbs/content.php?co_id=2_7"> <strong>동행발달재활센터</strong> </a>
                <p>전라남도 여수시에 위치한 발달 장애인 부모 및 보호자에게 개별/집단 상담을 제공합니다.</p>
            </li>
            <li>
                <strong>행복나눔심리발달재활센터</strong>
                <p>충청북도 제천시에 위치한 발달 장애인 보호자를 위한 상담 서비스를 제공합니다.</p>
            </li>
            <li>
                <a href = "http://www.childsupport.re.kr/"><strong>(사)한국아동발달지원연구소</strong></a>
                <p>대전광역시 서구에 위치하며, 자녀의 생애주기별에 따른 영유아 발달장애인 부모교육을 진행합니다.</p>
            </li>
        </ul>
        <p>더 많은 정보와 업데이트로 찾아뵙겠습니다.</p>
    </section>
    '''

    mail_html = NEW_MAIL_FORMAT.format( 
        )
    msg.attach(MIMEText(mail_html, 'html'))
    #print(mail_html)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.ehlo()
        smtp.login('lhs27733182@gmail.com', 'rrvlkggnxtqjbuvf')
        smtp.sendmail('lhs27733182@gmail.com', email_address, msg.as_string())

    print("mail")


if __name__ == "__main__":
    NewsLetter("504dragon@naver.com")
    