from ultralytics import YOLO

# Read description.md to understand training
def trainNewModel():
    model = YOLO('yolov8n.yaml')
    model.train(data='instructions.yaml', epochs=100, imgsz=640,
                batch=16, patience=50)


def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
    model.train(data='instructions.yaml', epochs=100, imgsz=640,
                batch=16, patience=50)


def resumeTraining():
    model = YOLO('path/to/last.pt')  # load a partially trained model
    model.train(resume=True)

# trainNewModel()
# trainPreTrainedModel()
# resumeTraining()