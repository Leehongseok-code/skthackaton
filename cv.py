# apple.jpg 그림에 opencv_logo 그림을 Mask_inverse하여 합성.
 
import cv2
import numpy as np
import os.path 

def col(src2_path, x, y):
    src1 = cv2.imread('./test_image/A4.png') #사과파일 읽기

    org_path = os.path.join("./test_image", "A4.png")
    pic_path = os.path.join("./test_image", src2_path)


    src2 = cv2.imread(pic_path) #로고파일 읽기

    
    rows, cols, channels = src2.shape #로고파일 픽셀값 저장
    roi = src1[0:rows,0:cols] #로고파일 필셀값을 관심영역(ROI)으로 저장함.
    #roi = src1[50:rows+50,50:cols+50] #로고파일 필셀값을 관심영역(ROI)으로 저장함.
    
    gray = cv2.cvtColor(src2, cv2.COLOR_BGR2GRAY) #로고파일의 색상을 그레이로 변경
    ret, mask = cv2.threshold(gray, 160, 255, cv2.THRESH_BINARY) #배경은 흰색으로, 그림을 검정색으로 변경
    mask_inv = cv2.bitwise_not(mask)
    cv2.imshow('mask',mask) #배경 흰색, 로고 검정
    cv2.imshow('mask_inv',mask_inv) # 배경 검정, 로고 흰색
    
    src1_bg = cv2.bitwise_and(roi,roi,mask=mask) #배경에서만 연산 = src1 배경 복사
    cv2.imshow('src1_bg',src1_bg)
    
    src2_fg = cv2.bitwise_and(src2,src2, mask = mask_inv) #로고에서만 연산
    cv2.imshow('src2_fg',src2_fg)
    
    dst = cv2.bitwise_or(src1_bg, src2_fg) #src1_bg와 src2_fg를 합성
    cv2.imshow('dst',dst)
    
    #뒤에게 가로, 앞에게 세로
    src1[y:rows+y,x:cols+x] = dst #src1에 dst값 합성
    
    cv2.imshow('result',src1)
    #cv2.imwrite('images/pasted.jpg', src1)
    cv2.imwrite('test_image/A4.png', src1)
    '''
    cv2.waitKeyEx()
    cv2.destroyAllWindows()
    '''

if __name__ == "__main__":
    col("", 50, 50)