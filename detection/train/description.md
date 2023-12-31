# Understanding Training

### Training Description
* We are using a google colab file to train the model as it offers a GPU for free. This is because we need a CUDA enabled GPU to train on GPU, and intel is not CUDA compatible. However, colab has a cooldown so use it wisely.
* Two datasets are used. **train** trains the model, **valid** tests the strength of model during training.
* Optionally, a third dataset called test can be used to test the strength after the training.
* Dataset workspace we are using is available at https://app.roboflow.com/snapcyclev2
* The .yaml file gives instructions on the data, such as pathway and classes of objects.

---

### Results Description
* A lot of graphs and images are produced that will let you know how the training is done. Here are some guidelines.
* Loss graphs are produced. Train was good if the loss is consistently going down.
* Val batches are produced from the val image set. If the objects are detected in them, train was good.

---

### Guidelines of what is recommended
* Epochs are the number of passes through a dataset. Standard amount is 100
* Batch size is number of image samples processed before the model is updated. Standard batch size is 16.
* For best results, 2000 bounding boxes per class.
* Standard image size is 640. If an image is not this size, it will automatically be resized so do not worry.

---

### Current standards being used
* For each class, 1000 train images and 250 valid images will be used. Overall, 1500 boundings boxes per class.
* For each class, 16 background train images and 4 background valid images are used.
* We are using a pretrained model from yolov8, such as yolov8n or yolov8m.
* nano takes 0.2 s, medium takes 1 s, large takes 2.5 s.
* With the new dataset, these are the training times per epoch:
* Nano: 1:50 minutes, about 3 hours
* Medium: 2:41 minutes, about 4 and a half hours

---

### Potential problems
* Apparently there should be 10000 bounding boxes per class :/
* A lot of the images have diagonal bounding boxes, including pixels that are not of the object. This makes the model less accurate
* A decent amount of images have overlapping bounding boxes. Apparently this makes the model less accurate too.

---

### Training new model
``` Python
def trainNewModel():
    model = YOLO('yolov8n.yaml')
    model.train(data='data.yaml', epochs=100, 
    imgsz=640, batch=16)
```
* Trains new model from scratch. This is better if we have a small dataset or have a pattern that is completely different than the pretrained models
* To give an idea of what a large dataset is, COCO is a large dataset that has over 150,000 images.
* We can choose model type to train as in .yaml form, ranging from yolov8n to yolov8x. yolov8x is strongest, but slowest and takes long to train.

---

### Training pretrained model
``` Python
def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  
    model.train(data='data.yaml', epochs=100,
    imgsz=640, batch=16)
```
* Trains model based off a pretrained model/weight that already knows some patterns. Good if we have a large dataset or have similar pattern to pretrained model
* Weights means the same thing as a pretrained model, such as yolov8n.pt