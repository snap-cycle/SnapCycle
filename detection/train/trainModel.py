from ultralytics import YOLO

'''
* Loads and trains model. Trains on Single CPU and GPU.
* The .yaml file gives instructions on pathway to data, and what categories the data will be in
* Two datasets. train trains the model, valid tests the strength of model during training.
* Optionally, a third dataset called test can be used to test the strength after the training
'''
def trainNewModel():
    model = YOLO('yolov8n.yaml')
    model.train(data='instructions.yaml', epochs=100, imgsz=640)

def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
    model.train(data='instructions.yaml', epochs=100, imgsz=640)

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