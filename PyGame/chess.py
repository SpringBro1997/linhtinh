#Import chương trình thư viện và chạy chương trình
import pygame
from pygame.locals import *
import sys
pygame.init()


#Thiết lập đọo rộng chương trình
displaysufr= pygame.display.set_mode((800,600))

#Đặt tên cửa sổ chương trình 
pygame.display.set_caption('Hello')

#FPS// chạy số khung hình/1s tạo hiệu ứng animation 
fpsclock= pygame.time.Clock()
FPS=40

#Color-Màu sắc
Red	=	(255,0,0)
Lime=	(0,255,0)
Blue=	(0,0,255)
Yellow=		(255,255,0)
White	= (255, 255, 255)

#Rect object
Myrect = pygame.Rect(50,50,100,100)
print(Myrect.center)

#Text
# Cần thiết lập pygame.init() mới có thể tải font trong chương trình
font1= pygame.font.Font('freesansbold.ttf',35)
text1= font1.render('Hello',True,Blue,Red) 

#Loading image
img= pygame.image.load('gut.png')
img1= pygame.transform.scale(img,(80,100))
imgx= 30
imgy= 30
direction= 'right'

#Thiết lập nút Quit cho chương trình
while True:
  displaysufr.fill(White) #Sửa màu background của chương trình
  pygame.draw.rect(displaysufr,Blue,(50,50,100,100))
  pygame.draw.circle(displaysufr,Red,(150,150),50,5)
  displaysufr.blit(text1,(20,20)) # Hiển thị text1 trong chương trình
  
  if direction == 'right':
    imgx += 5
    if imgx == 400:
      direction = 'down'
  if direction == 'down':
      imgy += 10
      if imgy == 500:
        direction = 'left'
  if direction == 'left':
        imgx -= 5
        if imgx == 30:
          direction = 'up'
  if direction == 'up':
          imgy -= 10
          if imgy == 30:
            direction ='right'
  
  displaysufr.blit(img1,(imgx,imgy)) #Hiển thị img trong chương trình

  for event in pygame.event.get():
    if event.type == QUIT:
      pygame.quit()
      sys.exit()
  pygame.display.update()
  fpsclock.tick(FPS)