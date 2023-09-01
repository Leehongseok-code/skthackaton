from mail import NEWS_TABLE_FORMAT, ARTICLE_FORMAT
from blockchain.models import CoinNews

def get_specific_news_table():
    news_types = ('BTC')
    news_table = ''
    coin_news_list = CoinNews.objects.all()
    print(type(coin_news_list[0].news_title))
    news_type = "BTC"
    
    articles = ''
    for coin_news in coin_news_list:
        print(coin_news.news_title)
        title = coin_news.news_title
        base_link = "http://115.85.183.115:3000/news/detail/"
        link = base_link + str(coin_news.news_id)
        articles += ARTICLE_FORMAT.format(link, title)  

    news_table += NEWS_TABLE_FORMAT.format(TYPE=news_type,
                                               ARTICLES=articles.rstrip('\n'))
    return news_table


def get_news_table():
    news_table = get_specific_news_table()
    return news_table