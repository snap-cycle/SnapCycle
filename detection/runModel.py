from ultralytics import YOLO
import shutil
import os

# Sets runs folder to be ready for new run
def fileManager(maxFolders):
    baseFolderPath = './runs'

    # Checks the count of folders in each run folder, such as detect and train, and deletes them if over maxFolders
    for item in os.listdir(baseFolderPath):
        itemPath = os.path.join(baseFolderPath, item)                #path of current folder, and takes count of it
        folderCount = len(os.listdir(itemPath))
        if folderCount >= maxFolders:
            print(itemPath, "Has reached the max folder count, deleting folders.")
            shutil.rmtree(itemPath)


# run model on capture image 
def runModel():
    fileManager(10)
    
    # load pretrained model
    model = YOLO("./yolov8n.pt") 

    # Use the model and set custom configurations
    sourcePath = './images/capture.jpg'
    results = model.predict(task = 'detect', source = sourcePath, save = True)

    #Print each object detected and their info
    result = results[0]
    for box in result.boxes:
        class_id = result.names[box.cls[0].item()]
        cords = box.xyxy[0].tolist()
        cords = [round(x) for x in cords]
        conf = round(box.conf[0].item(), 2)
        print("Object type:", class_id)
        print("Coordinates:", cords)
        print("Probability:", conf)
        print("---")
    
#uncomment this when you want to run this file, otherwise it must stay commented for imports to work
# runModel()