from ultralytics import YOLO

# Sets image and runs folder to be ready for new run
def fileManager():
    print("bruh")

# run model on capture image 
def runModel():
    # load pretrained model
    model = YOLO("./yolov8n.pt") 

    # Use the model and set custom configurations
    sourcePath = './images/capture.jpg'
    model.predict(task = 'detect', source = sourcePath, save = True)
    
def main():
    runModel()

main()