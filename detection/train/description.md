# Understanding Training

### General Description
* Each of the train functions loads and trains model. Trains on Single CPU and GPU.
* The .yaml file gives instructions on pathway to data, and what categories the data will be in.
* Two datasets are used. **train** trains the model, **valid** tests the strength of model during training.
* Optionally, a third dataset called test can be used to test the strength after the training.
* Roboflow is best for finding images and annotation, clearML is best for logging.
* For best results, 2000 boxes per class. However, 500 images is also good.
* For now, we shall try to train on yolov8m.pt kind of model, there are better but take longer to train.

### Training new model


### Training pretrained model



### Resuming training