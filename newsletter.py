import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import date
from mail import MAIL_FORMAT, STYLES
from news_scrap import get_news_table

from gptanswer import *

def NewsLetter(email_address=""):
    if email_address == "":
        return
    msg = MIMEMultipart('html')
    msg['Subject'] = f'{date.today().strftime("%m/%d/%Y")}의 메일'
    msg['From'] = 'lhs27733182@gmail.com'
    msg['To'] = 'myunghee1231@naver.com'

    news_table = get_news_table()

    mail_html = MAIL_FORMAT.format(
        STYLE=STYLES, NEWS=news_table)
    msg.attach(MIMEText(mail_html, 'html'))
    #print(mail_html)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.ehlo()
        smtp.login('lhs27733182@gmail.com', 'rrvlkggnxtqjbuvf')
        smtp.sendmail('lhs27733182@gmail.com', email_address, msg.as_string())

    print("mail")