from PIL import Image

def transparent():
    # 이미지 파일 열기
    image = Image.open("./test_image/A4.png")

    # 새로운 alpha channel 생성
    alpha_data = []
    print(image.size)

    for i in range(len(image.getdata())):
        pixel = image.getdata()[i]
        # 색상 범위 설정
        #lower_color = (250, 250, 250)  # 검색할 색상 범위의 최소값
        #upper_color = (255, 255, 255)  # 검색할 색상 범위의 최대값

        lower_color = (0, 0, 0)  # 검색할 색상 범위의 최소값
        upper_color = (10, 10, 10)  # 검색할 색상 범위의 최대값

        
        if lower_color[0] <= pixel[0] and lower_color[1] <= pixel[1] and lower_color[2] <= pixel[2]:
            alpha_data.append(0)
        else:  # 그 외의 경우 alpha 값을 255로 설정
            alpha_data.append(255)
        
            
        if upper_color[0] >= pixel[0] and upper_color[1] >= pixel[1] and upper_color[2] >= pixel[2]:
            alpha_data.append(255)
            image.putpixel = [255, 255, 255]
            #image.putpixel((i // image.size[1],i % image.size[1 ]),(255, 255, 255))
        else:  # 그 외의 경우 alpha 값을 255로 설정
            alpha_data.append(255)


    alpha_channel = Image.new("L", image.size)
    alpha_channel.putdata(alpha_data)

    # alpha channel을 이용하여 이미지의 배경을 투명하게 만듦
    new_image = image.convert("RGBA")
    new_image.putalpha(alpha_channel)

    # 이미지 파일 저장
    new_image.save("./test_image/transparent_image.png")