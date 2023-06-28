from ultralytics import YOLO

# Loads and trains model. Trains on Single CPU and GPU
def trainNewModel():

    model = YOLO('yolov8n.yaml')
    model.train(data='coco128.yaml', epochs=100, imgsz=640)

def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
    model.train(data='coco128.yaml', epochs=100, imgsz=640)

def resumeTraining():
    model = YOLO('path/to/last.pt')  # load a partially trained model
    model.train(resume=True)

# Uncomment function based on what is wanted to be used
# trainNewModel()
# trainPreTrainedModel()
# resumeTraining()

# Use Roboflow or google API or other websites to find data
# Use Roboflow to annotate all the images and export them
# Use ClearML for logging and data tracking