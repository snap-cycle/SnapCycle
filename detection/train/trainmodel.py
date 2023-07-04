"""trainModel.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1SX3TxCcY3MlS_t8-wTft4CgStYfk9YPR

#Train Model

We are training the model in google colab as they allow for a free GPU to be used. This makes the training process faster. 
This is the colab notebook, which can be saved and used on google colab. It is in .py form as github handles .ipynb weirdly.
"""


"""## Setting up
Set up the home directory, and install ultralytics
"""

import os
HOME = os.getcwd()
print(HOME)

#!pip install ultralytics --quiet

from IPython import display
display.clear_output()

import ultralytics
ultralytics.checks()

from ultralytics import YOLO

from IPython.display import display, Image


"""## Setting up dataset
We are exporting the datasets and setting up directories for them here.
"""

#!mkdir {HOME}/datasets
# %cd {HOME}/datasets
#!pip install roboflow

from roboflow import Roboflow
rf = Roboflow(api_key="O8L0T8hcATH2cjZKeR18")
project = rf.workspace("snapcycle").project("snapcycle")
dataset = project.version(1).download("yolov8")


"""
## Custom Training
This is where the dataset is used to train. Three types of way to train, by either training new model, training based off a pretrained one, or resuming training.
"""
# %cd {HOME}

dataPath = '/content/datasets/SnapCycle-1/data.yaml'

def trainNewModel():
    model = YOLO('yolov8n.yaml') # load new model from yolo's starter models in .yaml
    model.train(data=dataPath, epochs=100, imgsz=640,
                batch=16, patience=50, plots=True)


def trainPreTrainedModel():
    model = YOLO('yolov8n.pt')  # load a pretrained model, can either be yolo's or someone elses
    model.train(data=dataPath, epochs=100, imgsz=640,
                batch=16, patience=50, plots=True)


def resumeTraining():
    model = YOLO('path/to/last.pt')  # load a partially trained model
    model.train(resume=True)

trainPreTrainedModel()