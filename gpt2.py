
import os
import openai

openai.api_key ="" 
question = input("한국어 할 수 있어?:")

completion = openai.ChatCompletion.create(
  model="gpt-4",
  messages=[{"role": "user", "content": question}]
)

print(completion.choices[0].message.content)
