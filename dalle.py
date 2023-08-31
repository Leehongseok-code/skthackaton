import openai


class DallE():
    def __init__(self):
        openai.api_key = "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"
        messages = []
        self.generated_image = ""


    def download_image(self, image_url):
        import urllib. request as req
        image_url = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-8wcvBxN3H7xshG4VAAgkNEyu/user-c319FLewk0K5U8iaq46OPLuk/img-AIZHh8YvA61fV5Gy1moqeQBg.png?st=2023-08-29T10%3A47%3A26Z&se=2023-08-29T12%3A47%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-28T12%3A50%3A37Z&ske=2023-08-29T12%3A50%3A37Z&sks=b&skv=2021-08-06&sig=jRNED71RdE%2B%2BH1qjmi7fEvTwXLtI3tDRahwzYMS9X/8%3D"
        save_path = "./test_image"
        download_file = req.urlretrieve(image_url, save_path)
        

    def generate(self, prompt):
        #prompt = "color this car to red https://oaidalleapiprodscus.blob.core.windows.net/private/org-8wcvBxN3H7xshG4VAAgkNEyu/user-c319FLewk0K5U8iaq46OPLuk/img-Yj05zWPnm9C2n0E1WTs5twce.png?st=2023-08-26T04%3A39%3A20Z&se=2023-08-26T06%3A39%3A20Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-25T17%3A04%3A42Z&ske=2023-08-26T17%3A04%3A42Z&sks=b&skv=2021-08-06&sig=phHV6wr0cqkzZIjomZdstQ7wfBmoMAscAFai5C1d%2B/w%3D"
        response = openai.Image.create(
            prompt = prompt + "with black background",
            n = 1,
            size = "512x512"
        )
        image_url = response['data'][0]['url']
        self.generated_image = image_url
        print("gen:", self.generated_image)
        return image_url

    def fix(self):
        response = openai.Image.create_edit(
        image=open(generated_image, "rb"),
        mask=open("/dalle/mask.png", "rb"),
        prompt="create a computer monitor which is displaying exactly this picture https://oaidalleapiprodscus.blob.core.windows.net/private/org-8wcvBxN3H7xshG4VAAgkNEyu/user-c319FLewk0K5U8iaq46OPLuk/img-Yj05zWPnm9C2n0E1WTs5twce.png?st=2023-08-26T04%3A39%3A20Z&se=2023-08-26T06%3A39%3A20Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-25T17%3A04%3A42Z&ske=2023-08-26T17%3A04%3A42Z&sks=b&skv=2021-08-06&sig=phHV6wr0cqkzZIjomZdstQ7wfBmoMAscAFai5C1d%2B/w%3D",
        n=1,
        size="512x512"
        )
        image_url = response['data'][0]['url']
        print("최종:", image_url)

    def variation(self):
        response = openai.Image.create_variation(
        image=open("./images/collague.png", "rb"),
        n=3,
        size="256x256",
        )
        image_url = response['data'][0]['url']
        print("최종:", image_url)


if __name__ == "__main__":
    dalle = DallE()
    dalle.generate(prompt = "a cute car with black background")
    
    #fix()