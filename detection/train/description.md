# Understanding Training

### General Description
* Each of the train functions loads and trains model. Trains on Single CPU and GPU.
* The .yaml file gives instructions on pathway to data, and what categories the data will be in.
* Two datasets are used. **train** trains the model, **valid** tests the strength of model during training.
* Optionally, a third dataset called test can be used to test the strength after the training.

### Guidelines of what is recommended
* Epochs are the number of passes through a dataset. Standard amount is 100
* Batch size is number of image samples processed before the model is updated. Standard batch size is 32.
* For best results, 2000 boxes per class. However, 500 images is also good.
* Roboflow is best for finding images and annotation, clearML is best for logging.

## Training new model
``` Python
def trainNewModel():
    model = YOLO('yolov8n.yaml')
    model.train(data='instructions.yaml', epochs=100, imgsz=640)
```
* Trains new model from scratch. This is better if we have a small dataset or have a pattern that is completely different than the pretrained models
* We can choose model type to train as, ranging from yolov8n to yolov8x. yolov8x is strongest, but slowest and takes long to train.

## Training pretrained model
``` Python
def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  # load a pretrained model/weight
    model.train(data='instructions.yaml', epochs=100, imgsz=640)
```
* Trains model based off a pretrained model/weight that already knows some patterns. Good if we have a large dataset or have similar pattern to pretrained model
* People like to say that you load weights to train your model on a pretrained model. Weights means the same thing as a pretrained model, such as yolov8n.pt
