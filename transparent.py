from PIL import Image

# 이미지 파일 열기
image = Image.open("./images/car.png")

# 새로운 alpha channel 생성
alpha_data = []
for pixel in image.getdata():
    # 색상 범위 설정
    lower_color = (250, 250, 250)  # 검색할 색상 범위의 최소값
    upper_color = (255, 255, 255)  # 검색할 색상 범위의 최대값

    if lower_color[0] <= pixel[0] and lower_color[1] <= pixel[1] and lower_color[2] <= pixel[2]:
        alpha_data.append(0)
    else:  # 그 외의 경우 alpha 값을 255로 설정
        alpha_data.append(255)


alpha_channel = Image.new("L", image.size)
alpha_channel.putdata(alpha_data)

# alpha channel을 이용하여 이미지의 배경을 투명하게 만듦
new_image = image.convert("RGBA")
new_image.putalpha(alpha_channel)

# 이미지 파일 저장
new_image.save("transparent_image.png")