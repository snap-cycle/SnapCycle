from tkinter import *
import cv2
from PIL import Image, ImageTk
from runModel import runModel, fileManager
import os

# Define a video capture object and set size
vid = cv2.VideoCapture(0)
vid.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
vid.set(cv2.CAP_PROP_FRAME_HEIGHT, 640)

# Create a GUI app, bind it with escape key, and set size
app = Tk()
app.title("Image Capture and AI model test")
app.bind('<Escape>', lambda e: app.quit())
window_width = 300
window_height = 110
app.geometry(f"{window_width}x{window_height}")

# Create a function to open the camera and display it in the label_widget on the app
def cameraSetup():
    # Create a label to set space for the camera
    label_widget = Label(app)
    label_widget.grid(row=0, column=0, columnspan=2, padx=10, pady=10)

    # Capture the video frame by frame
    _, frame = vid.read()

    # Transform image
    opencv_image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)
    captured_image = Image.fromarray(opencv_image)
    photo_image = ImageTk.PhotoImage(image=captured_image)

    # Display the PhotoImage in the label
    label_widget.configure(image=photo_image)
    label_widget.photo_image = photo_image  # Keep a reference to prevent image garbage collection

    # Update the application window size to fit all the widgets
    app.update_idletasks()
    app.geometry("")

    # Repeat the same process after every 10 milliseconds
    label_widget.after(10, cameraSetup)

    # Remove the "open camera" button, and display the "Take Picture" and "Delete Pictures" buttons
    cameraButton.grid_remove()
    captureButton.grid(row=1, column=0, padx=10, pady=10)
    deleteButton.grid(row=1, column=1, padx=10, pady=10)

#opens the result in the users default image viewer
def openPicture():
    folderPath = './runs/detect'
    folderList = os.listdir(folderPath)
    file = os.path.join(folderPath, folderList[-1]) + '/capture.jpg'
    image = Image.open(file)
    image.show()

# Captures the video frame, saves it, runs the model, then opens the result
def captureSetup():
    _, frame = vid.read()
    path = "images/capture.jpg"
    cv2.imwrite(path, frame)
    runModel()
    openPicture()

def deleteSetup():
    fileManager(0)

# Creates a button to open the camera in the GUI app
cameraButton = Button(app, text="Open Camera", command=cameraSetup)
cameraButton.grid(row=1, column=0, padx=105, pady=0, sticky="ns")

# Creates a button to capture the image (initially hidden)
captureButton = Button(app, text="Take Picture", command=captureSetup)
captureButton.grid(row=1, column=0, padx=10, pady=10)
captureButton.grid_remove()

# Creates a button to delete the runs folder (initially hidden)
deleteButton = Button(app, text="Delete Pictures", command=deleteSetup)
deleteButton.grid(row=1, column=1, padx=10, pady=10)
deleteButton.grid_remove()

# Creates an infinite loop for displaying the app on the screen
app.mainloop()