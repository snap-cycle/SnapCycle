from tkinter import *
import os
import cv2
import shutil
from PIL import Image, ImageTk
from runModel import runModel, fileManager

# Define a video capture object
vid = cv2.VideoCapture(0)

# Set the width and height
vid.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
vid.set(cv2.CAP_PROP_FRAME_HEIGHT, 640)

# Create a GUI app
app = Tk()

# Bind the app with Escape keyboard to quit app whenever pressed
app.bind('<Escape>', lambda e: app.quit())

# Set the starting width and height of the application window
window_width = 300
window_height = 150
app.geometry(f"{window_width}x{window_height}")

# Create a label and display it on app
label_widget = Label(app)
label_widget.grid(row=0, column=0, columnspan=2, padx=10, pady=10)

# Create a function to open the camera and display it in the label_widget on the app
def cameraSetup():
    # Capture the video frame by frame
    _, frame = vid.read()

    # Convert image from one color space to another
    opencv_image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)

    # Capture the latest frame and transform it to an image
    captured_image = Image.fromarray(opencv_image)

    # Convert captured image to PhotoImage
    photo_image = ImageTk.PhotoImage(image=captured_image)

    # Display the PhotoImage in the label
    label_widget.configure(image=photo_image)
    label_widget.photo_image = photo_image  # Keep a reference to prevent image garbage collection

    # Update the application window size to fit all the widgets
    app.update_idletasks()
    app.geometry("")  # Reset the window size based on the widgets

    # Repeat the same process after every 10 milliseconds
    label_widget.after(10, cameraSetup)

    # Remove the "Open Camera" button
    cameraButton.grid_remove()

    # Display the "Take Picture" and "Delete Pictures" buttons
    captureButton.grid(row=1, column=0, padx=10, pady=10)
    deleteButton.grid(row=1, column=1, padx=10, pady=10)

# Captures the video frame, saves it, and runs the model
def captureSetup():
    _, frame = vid.read()
    path = "images/capture.jpg"
    cv2.imwrite(path, frame)
    runModel()

def deleteSetup():
    fileManager(0)

# Creates a button to open the camera in the GUI app
cameraButton = Button(app, text="Open Camera", command=cameraSetup)
cameraButton.grid(row=1, column=0, padx=10, pady=10, sticky="nsew")

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