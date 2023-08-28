import openai

class GPT():
    def __init__(self):
        openai.api_key = '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'
        messages = []
        self.words_list = []
        self.pictures_dict = {}

    #감정에 어울리는 사진을 고른 후, 쉼표로 구분해서 출력해주는 함수
    def select_pictures(self):
        content = "너는 뛰어난 미술치료사야. 미술치료 콜라주에 필요한 사진을 선정해야 하는데, 네가 콜라주에 사용할 사진을\
            20장 선정해야 해. 의뢰자는 현재 우울한 감정을 느끼고 있어. 이 의뢰자의 미술치료에 도움을 줄 만한 콜라주 재료\
                사물들을 쉼표로 구분해서 20개 나열해 줘.\
                    [예시]\
                        자동차, 나비, 꽃, 벌, 티셔츠, 강아지, 고양이"

        messages = []
        messages.append({"role": "user", "content":content})

        completion = openai.ChatCompletion.create(
                model="gpt-4",
                messages=messages
        )
        chat_response = completion.choices[0].message.content 
        print(f'ChatGPT: {chat_response}')
        messages.append({"role":"assistant", "content": chat_response})
        return chat_response

    #select_pictures에서 선정한 단어들을 영어로 번역해서 출력하는 함수
    def translate(self, content):
        content = "다음 단어들을 각각 영어로 번역해서 똑같이 쉼표로 구분된 형식으로 출력해 줘.\
                    [예시]\
                        car, butterfly, flower, bee, T-shirts, puppy, cat" + content

        messages = []
        messages.append({"role": "user", "content":content})

        completion = openai.ChatCompletion.create(
                model="gpt-4",
                messages=messages
        )
        chat_response = completion.choices[0].message.content 
        print(f'ChatGPT: {chat_response}')
        messages.append({"role":"assistant", "content": chat_response})
        return chat_response
    
    #그림치료 설명서를 작성해주는 함수
    def write_insrtuction(self, content, pictures):
        prompt = ""
        for i in range(len(pictures)):
            picture = pictures[i]
            prompt += picture
            prompt += ","
        prompt = prompt.strip(",")
        prompt += "로 콜라주를 진행해야 해.\
        네가 그림치료사라고 생각하고, 보호자에게 줄 설명서를 작성한다고 생각해 봐.도화지는 \
        총 6칸으로 구성되어 있고, 가로 3칸, 세로 2줄이야. 왼쪽 상단부터 1,2,3,4,5,6번이라고 할 때, \
        각 그림을 몇 번 위치에 배치하는 게 가장 보기 좋은지 알려줘."
        print(prompt)

        content = prompt

        messages = []
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
    

    def words_to_list(self, words):
        self.words_list = words.split(',')
        for i in range(len(self.words_list)):
            self.words_list[i] = self.words_list[i].strip().strip('.')
        print(self.words_list)


    #def instruction_to_dict(self, response):

        

if __name__ == "__main__":
    gpt = GPT()
    selected_pictures = gpt.select_pictures()
    translated_pictures = gpt.translate(selected_pictures)
    print(gpt.words_to_list(translated_pictures))
    #gpt.post("", ["자동차", "꽃", "나비"])