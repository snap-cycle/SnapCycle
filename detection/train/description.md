# Understanding Training

### Training Description
* We are using a google colab file to train the model as it offers a GPU for free. This is because we need a CUDA enabled GPU to train on GPU, and intel is not CUDA compatible. However, colab has a cooldown so use it wisely.
* Two datasets are used. **train** trains the model, **valid** tests the strength of model during training.
* Optionally, a third dataset called test can be used to test the strength after the training.
* Dataset we are using is available at https://universe.roboflow.com/snapcycle/snapcycle/dataset/1
* The .yaml file gives instructions on the data, such as pathway and classes of objects.

### Results Description
* A lot of graphs and images are produced that will let you know how the training is done. Here are some guidelines.
* Loss graphs are produced. Train was good if the loss is consistently going down.
* Val batches are produced from the val image set. If the objects are detected in them, train was good.

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
    model.train(data='data.yaml', epochs=100, imgsz=640, batch=16, patience=50)
```
* Trains new model from scratch. This is better if we have a small dataset or have a pattern that is completely different than the pretrained models
* To give an idea of what a large dataset is, COCO and Object365 are large datasets that have over 150,000 images. So it would be a good idea to just use a pretrained model.
* We can choose model type to train as in .yaml form, ranging from yolov8n to yolov8x. yolov8x is strongest, but slowest and takes long to train.

## Training pretrained model
``` Python
def trainPreTrainedModel():
    # Call ClearML init before YOLOv8
    task = Task.init(project_name="YOLOv8", task_name="detection_training", tags=['YOLOv8'])

    model = YOLO('yolov8n.pt')  # load a pretrained model, can either be yolo's or someone elses
    model.train(data='data.yaml', epochs=100, imgsz=640,
                batch=16, patience=50)
```
* Trains model based off a pretrained model/weight that already knows some patterns. Good if we have a large dataset or have similar pattern to pretrained model
* People like to say that you load weights to train your model on a pretrained model. Weights means the same thing as a pretrained model, such as yolov8n.pt
