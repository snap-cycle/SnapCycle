import torch
import cv2
import detect as det

#Activate and name camera screen
cam = cv2.VideoCapture(0)

#While loop to take pictures, and escape out of camera screen
img = 0
while True:
    ret, pic = cam.read()
    if not ret:
        print("failed to grab frame")
        break
    cv2.imshow("Take picture of object", pic)

    #Escapes camera screen
    k = cv2.waitKey(1)
    if k%256 == 27:
        # ESC pressed
        print("Escape hit, closing...")
        break

    #Takes picture, saves it to folder, allows to take multiple pictures
    
    elif k%256 == 32:
        # SPACE pressed
        img_name = "user_picture_{}.png".format(img)
        cv2.imwrite('data/images/img.png', pic)
        print("{} written!".format(img_name))
        img += 1
        break                  #add break if we want to only take one picture

#close camera window
cam.release()
cv2.destroyAllWindows()

exec(open("../yolov7/detect.py").read())
#det.detect()

#delete picture
# try: 
#     for new_counter in range(img):
#         os.remove("user_picture_{}.png".format(new_counter))
# except: 
#     print("Images could not be deleted.")

#python detect.py --weights yolov7.pt --img 640 --conf 0.50 --source data/images/