# Cài đặt thư viện
import pygame
from pygame.locals import *
import sys
pygame.init()

#FPS
fpsClock = pygame.time.Clock()
FPS = 30
#KHai báo biến
windowheight = 800
windowwidth = 600
imgheight = 100
imgwidth= 120

displaysufr = pygame.display.set_mode((windowwidth,windowheight))

#Color-Màu sắc
Red	=	(255,0,0)
Lime=	(0,255,0)
Blue=	(0,0,255)
Yellow=		(255,255,0)
White	= (255, 255, 255)

pygame.display.set_caption('Motion')

#load image
img = pygame.image.load('gut.png')
img= pygame.transform.scale(img,(imgheight,imgwidth))

#get-rect
img_rect= img.get_rect(center=(50,50))

#Hàm thay đổi toạ độ Key
def move(up,down,left,right):
  speed=10
  if up:
    img_rect.centery -= speed
    if img_rect.top <= 0:
      img_rect.top = 0
  if down:
    img_rect.centery += speed
    if img_rect.bottom >= windowheight:
      img_rect.bottom = windowheight
  if left:
    img_rect.centerx -= speed
    if img_rect.left <= 0:
      img_rect.left = 0
  if right:
    img_rect.centerx  += speed 
    if img_rect.right >= windowwidth:
      img_rect.right = windowwidth
up, down, left, right = False,False,False,False      

#Cài đạt hiển thị QUIT
while True:
  displaysufr.fill(White)
  displaysufr.blit(img,img_rect)
  
  for event in pygame.event.get():
    if event.type == QUIT:
      pygame.quit()
      sys.exit()
    
    #Cài Phím
    if event.type==KEYDOWN:
      if event.key == K_UP:
        up = True
        print('up')
      if event.key == K_DOWN:
        down = True
        print('down')
      if event.key == K_LEFT:
        left= True
        print('left')
      if event.key == K_RIGHT:
        right= True  
        print('right')    
   #Thiết lập Key dừng lại
    if event.type==KEYUP:
      if event.key == K_UP:
        up = False
        print('up')
      if event.key == K_DOWN:
        down = False
        print('down')
      if event.key == K_LEFT:
        left= False
        print('left')
      if event.key == K_RIGHT:
        right= False  
        print('right')     
  
  move(up,down,left,right)
     
  fpsClock.tick(FPS)      
  pygame.display.update()