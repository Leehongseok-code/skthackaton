from gptanswer import *


STYLES = '''
<style>
    body {
        width: 70vw;
        text-align: center;
        color: rgba(96, 173, 141, 0.932);
        background-color: black;
    }
    h1 {
        color: rgb(116, 171, 253);
    }
    .container {
        width: 100%;
        margin: 10px;
    }
    
    
    
    table {
        width: 100%;
        text-align: center;
        border: 2px solid;
        margin-bottom: 15px;
    }
    
    th {
        border-bottom: 1px solid;
        font-size: 16px;
        color: rgb(245, 98, 0);
        background-color: white;
        margin-bottom: 10px;
    }
    td {
        border: 1px solid rgba(32, 229, 255, 0.932);
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>
'''


NEWS_TABLE_FORMAT = '''
<table style="width: 100%; text-align: center; margin-bottom: 15px;">
    <thead>
        <tr>
            <th style="border: 1px solid black; padding: 10px; color: darkblue;"></th>
        </tr>
    </thead>
    <tbody>
        {ARTICLES}
    </tbody>
</table>
'''

ARTICLE_FORMAT = '''
<tr>
    <td style="border: 1px solid black; padding: 10px; color: black;">
        {}
    </td>
</tr>
'''

MAIL_FORMAT = '''
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
{STYLE}
<body>
    <div class="container" style="text-align: center;">
        <h1 style="color: darkblue;">오늘의 MoT</h1>
        {NEWS}
    </div>
</body>
</html>
'''