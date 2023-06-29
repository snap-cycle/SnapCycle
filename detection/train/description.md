# Understanding Training

### General Description
* Each of the train functions loads and trains model. Trains on Single CPU and GPU and detects automatically.
* Need a CUDA enabled GPU to train on GPU. intel is not CUDA compatible :/
* The .yaml file gives instructions on pathway to data, and what categories the data will be in.
* Two datasets are used. **train** trains the model, **valid** tests the strength of model during training.
* Optionally, a third dataset called test can be used to test the strength after the training.

### Guidelines of what is recommended
* Epochs are the number of passes through a dataset. Standard amount is 100
* Batch size is number of image samples processed before the model is updated. Standard batch size is 16, but can be raised to 32.
* For best results, 2000 boxes per class. However, 500 images is also good.
* Standard image size is 640. If an image is not this size, it will automatically be resized so do not worry.
* Patience is number of epochs model waits before stopping due to no significance improvement, standard is 50.
* Roboflow is best for finding images and annotation, clearML is best for logging.

## Training new model
``` Python
def trainNewModel():
    model = YOLO('yolov8n.yaml')
    model.train(data='instructions.yaml', epochs=100, imgsz=640, batch=16, patience=50)
```
* Trains new model from scratch. This is better if we have a small dataset or have a pattern that is completely different than the pretrained models
* To give an idea of what a large dataset is, COCO and Object365 are large datasets that have over 150,000 images. So it would be a good idea to just use a pretrained model.
* We can choose model type to train as in .yaml form, ranging from yolov8n to yolov8x. yolov8x is strongest, but slowest and takes long to train.

## Training pretrained model
``` Python
def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
    model.train(data='instructions.yaml', epochs=100, imgsz=640, batch=16, patience=50)
```
* Trains model based off a pretrained model/weight that already knows some patterns. Good if we have a large dataset or have similar pattern to pretrained model
* People like to say that you load weights to train your model on a pretrained model. Weights means the same thing as a pretrained model, such as yolov8n.pt
