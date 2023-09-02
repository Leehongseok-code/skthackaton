from mail import NEWS_TABLE_FORMAT, ARTICLE_FORMAT
from mail_style import *

def get_specific_news_table():
    news_table = ''
    
    articles = ''
    for content in newsletter_contents :
        
        title = content["center_name"]
        '''
        base_link = "http://115.85.183.115:3000/news/detail/"
        link = base_link + str(coin_news.news_id)
        '''
        articles += ARTICLE_FORMAT.format(title)
    print(articles)  

    news_table += NEWS_TABLE_FORMAT.format(ARTICLES=articles.rstrip('\n'))
    return news_table


def get_news_table():
    news_table = get_specific_news_table()
    return news_table