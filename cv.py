import cv2
import numpy as np

# 이미지 불러오기
image = cv2.imread("car.png")  # input_image.jpg에 따로 누끼가 있는 이미지를 준비해주세요.

# 그레이스케일로 변환
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# 가장자리 검출 (Canny 알고리즘 사용)
edges = cv2.Canny(gray, threshold1=30, threshold2=70)

# 윤곽선 검출
contours, _ = cv2.findContours(edges.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# 누끼의 가장 큰 윤곽 선택
largest_contour = max(contours, key=cv2.contourArea)

# 누끼 영역에 대한 마스크 생성
mask = np.zeros(image.shape[:2], dtype=np.uint8)
cv2.drawContours(mask, [largest_contour], -1, 255, thickness=cv2.FILLED)

# 마스크 반전
inverse_mask = cv2.bitwise_not(mask)

# 배경 이미지 생성
background = np.full(image.shape, (0, 0, 0), dtype=np.uint8)

# 누끼 부분만 추출하여 배경 이미지에 붙이기
foreground = cv2.bitwise_and(image, image, mask=mask)
background = cv2.bitwise_and(background, background, mask=inverse_mask)
result = cv2.add(background, foreground)

# 결과 이미지 저장 (PNG 형식으로 투명한 배경을 저장)
cv2.imwrite("./test_image/transparent_background.png", result)
