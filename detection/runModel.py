from ultralytics import YOLO
import shutil
import os
from PIL import Image

# Sets runs folder to be ready for new run
def fileManager(maxFolders):
    baseFolderPath = './detection/runs'

    # Checks the count of folders in each run folder, such as detect and train, and deletes them if over maxFolders
    for item in os.listdir(baseFolderPath):
        itemPath = os.path.join(baseFolderPath, item)                #path of current folder, and takes count of it
        folderCount = len(os.listdir(itemPath))
        if folderCount >= maxFolders:
            print(itemPath, "Has reached the max folder count, deleting folders.")
            shutil.rmtree(itemPath)

# Checks if any objects were detected
def noObjects(results):
    return len(results[0].boxes) == 0

# Calculates relevancy score based on confidence level and position of box
def calculateRelScore(coords, imageXBar, imageYBar, confScore):
    # x1y1 is coords of top left of box, x2y2 is coords of bottom right of box. (0,0) is at top left of picture                 
    x1, y1 = coords[0], coords[1]
    x2, y2 = coords[2], coords[3]
    boxXBar = (x1 + x2)/2           
    boxYBar = (y1 + y2)/2            

    '''
    * Calculates how relevant an object is based on the following parameters. The max score is 1:
    * How close an image is to the middle. x and y are each given a significance of 0.33
    * Value of confidence score. Given a significance of 0.33
    '''
    xScore = (1 - abs(boxXBar - imageXBar)/imageXBar)*0.33
    yScore = (1 - abs(boxYBar - imageYBar)/imageYBar)*0.33
    confScore = confScore*0.33
    relScore = xScore + yScore + confScore

    print("xScore:", round(xScore,3))
    print("yScore:", round(yScore,3))
    print("confScore:", round(confScore,3))
    return relScore

# Iterates through each object detected and calculates relevancy score of object
def getMainObject(results):
    image = Image.open("./detection/images/capture.jpg")       
    imageWidth, imageHeight = image.size
    imageXBar, imageYBar = imageWidth/2, imageHeight/2
    result = results[0]
    curScore = 0
    mainObject = None

    # Each object detected is stored in result.boxes, this must be iterated through
    for box in result.boxes:
        objectName = result.names[box.cls[0].item()]
        confScore = round(box.conf[0].item(), 2)
        coords = box.xyxy[0].tolist()
        roundedCoords = [round(x,3) for x in coords]

        # Checks if object is the most relevant one detected in the image
        relScore = calculateRelScore(coords, imageXBar, imageYBar, confScore)
        if (relScore > curScore):
            curScore = relScore
            mainObject = objectName

        #Print all relevant info of object
        print("Object type:", objectName)
        print("Coordinates:", roundedCoords)
        print("Probability:", confScore)
        print("Relevancy Score:", round(relScore,3))
        print("---")
    
    return mainObject

# run model on capture image 
def runModel():
    # Readies directories and runs model
    fileManager(10)
    model = YOLO("./detection/yolov8m.pt") 
    sourcePath = './detection/images/capture.jpg'
    results = model.predict(task = 'detect', source = sourcePath, save = True, project = "./detection/runs/detect")

    # Checks if no objects were dectected, or what the main object detected is
    if (noObjects(results)):
        print("No objects were detected, please try again.")
    else:
        detectedObject = getMainObject(results)
        print("The main object detected is", detectedObject)
    
#uncomment this when you want to run this file, otherwise it must stay commented for imports to work
runModel()