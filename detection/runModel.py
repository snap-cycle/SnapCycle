from ultralytics import YOLO
import shutil
import os

# Sets runs folder to be ready for new run
def fileManager():
    baseFolderPath = './runs'
    maxFolders = 10
    folderCount = 0

    # Checks the count of folders in each run folder, such as detect and train, and deletes them if over maxFolders
    for item in os.listdir(baseFolderPath):
        itemPath = os.path.join(baseFolderPath, item)                               #path of current folder, and takes count of it
        folderCount = len(os.listdir(itemPath))
        if folderCount >= maxFolders:
            print(itemPath, "Has reached the max folder count, deleting folders.")
            shutil.rmtree(itemPath)


# run model on capture image 
def runModel():
    # load pretrained model
    model = YOLO("./yolov8n.pt") 

    # Use the model and set custom configurations
    sourcePath = './images/capture.jpg'
    model.predict(task = 'detect', source = sourcePath, save = True)
    
def main():
    fileManager()
    runModel()

main()