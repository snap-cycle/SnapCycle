from ultralytics import YOLO
from clearml import Task

# Read description.md to understand training
def trainNewModel():
    model = YOLO('yolov8n.yaml') # load new model from yolo's starter models in .yaml
    model.train(data='instructions.yaml', epochs=100, imgsz=640,
                batch=16, patience=50)


def trainPreTrainedModel():
    # Call ClearML init before YOLOv8
    task = Task.init(project_name="YOLOv8", task_name="detection_training", tags=['YOLOv8'])

    model = YOLO('yolov8n.pt')  # load a pretrained model, can either be yolo's or someone elses
    model.train(data='instructions.yaml', epochs=100, imgsz=640,
                batch=16, patience=50)


def resumeTraining():
    model = YOLO('path/to/last.pt')  # load a partially trained model
    model.train(resume=True)

# trainPreTrainedModel()

# Set up clearML, and start setting up dataset