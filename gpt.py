import openai

openai.api_key = ''
messages = []
def gpt(content):
    messages = []
    #prompt="document summarize in Korean under 150 number of characters"
    prompt = ""

    messages.append({"role": "user", "content":content})

    if len(messages) > 4:
        messages=messages[:-2]

    completion = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages
    )
    chat_response = completion.choices[0].message.content 
    print(f'ChatGPT: {chat_response}')
    messages.append({"role":"assistant", "content": chat_response})
    return chat_response

if __name__ == "__main__":
    gpt("python으로 url을 입력받아서 이미지를 보여주고 시펑.")
