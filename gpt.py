import openai

openai.api_key = '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'
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
    gpt("https://www.kkday.com/ko/blog/wp-content/uploads/Empire-State-Building_AShutterstock_421599727.jpg 이 이미지에 대해 설명해 줘.")