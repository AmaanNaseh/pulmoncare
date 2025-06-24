# Flask imports
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

# Common Usage
import os
import shutil
import numpy as np
from werkzeug.utils import secure_filename

# ML imports
from keras.preprocessing import image
from keras.utils import load_img, img_to_array
from keras.models import load_model
import joblib

# App setup

app = Flask(__name__)
cors = CORS(app)

# Models Import

model_ct = load_model("./models/lung_cancer_ct.h5")
model_mri = load_model("./models/lung_cancer_mri.h5")
model_hp = load_model("./models/lung_cancer_hp.h5")
model_qa = joblib.load("./models/lung_cancer_qa.joblib")

print("Loaded Models from Disk")

# Labels

labels_ct = ["Adeno Carcinoma Tumor Detected", "Benign Tumor Detected", "Healthy", "Invalid", "Large Cell Carcinoma Tumor Detected", "Malignant Tumor Detected", "Squamous Cell Carcinoma Tumor Detected"]
labels_mri = ["Cancer Detected", "Healthy", "Invalid"]
labels_hp = ["Adeno Carcinoma Detected", "Healthy", "Invalid", "Squamous Cell Carcinoma Detected"]

# Pre-Processing

def load_image(img_path):
    img = load_img(img_path, target_size=(224, 224))
    img_tensor = img_to_array(img)
    img_tensor = np.expand_dims(img_tensor, axis=0)
    img_tensor = img_tensor / 255
    return img_tensor

#####################################################################################################################

@app.route("/", methods=["GET", "POST"])
def main():
    save_path = "user_uploads"
    if not os.path.exists(save_path):
        os.makedirs(save_path)

    file_ct = ".\\user_uploads\\ct.png"
    if not os.path.exists(file_ct):
        src = ".\\models\\ct.png"
        dst = ".\\user_uploads\\ct.png"
        shutil.copy(src, dst)
        print("CT Copy Done")

    file_mri = ".\\user_uploads\\mri.png"
    if not os.path.exists(file_mri):
        src=".\\models\\mri.png"
        dst=".\\user_uploads\\mri.png"
        shutil.copy(src, dst)
        print("MRI Copy Done")

    file_hp = ".\\user_uploads\\hp.jpeg"
    if not os.path.exists(file_hp):
        src=".\\models\\hp.jpeg"
        dst=".\\user_uploads\\hp.jpeg"
        shutil.copy(src, dst)
        print("Hp Copy Done")
    
    return "result"

@app.route("/predict/ct", methods=["GET", "POST"])
def predict_ct():
    if request.method == "POST":
        print(request.files)

        if "file" not in request.files:
            return jsonify({"error": "No file selected"}), 400
        
        file = request.files['file']
        save_path = "user_uploads"

        filename = secure_filename("ct.png")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)

        loaded_image = load_image(file_path)
        prediction = model_ct.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)

        max_prob = np.max(prediction)
        confidence_threshold = 0.75
        confidence = str(round(max_prob * 100, 2))
        
        output = labels_ct[int(class_id)]
        result = str(output)

        if (max_prob <= 0.65):
            result = "Very Low Confidence (" + str(round(max_prob * 100, 2)) + "%) " + "Prediction. Please use another image."
            return result
        else:
            if (max_prob >= confidence_threshold):
                result = result + " with good confidence " + confidence + "%"
                print(result)
                return result
            else:
                result = result + " with low confidence " + confidence + "%"
                print(result)
                return result

@app.route("/predict/mri", methods=["GET", "POST"])
def predict_mri():
    if request.method == "POST":
        print(request.files)

        if "file" not in request.files:
            return jsonify({"error": "No file selected"}), 400
        
        file = request.files['file']
        save_path = "user_uploads"

        filename = secure_filename("mri.png")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)

        loaded_image = load_image(file_path)
        prediction = model_mri.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)

        max_prob = np.max(prediction)
        confidence_threshold = 0.75
        confidence = str(round(max_prob * 100, 2))

        output = labels_mri[int(class_id)]
        result = str(output)

        if (max_prob <= 0.65):
            result = "Very Low Confidence (" + str(round(max_prob * 100, 2)) + "%) " + "Prediction. Please use another image."
            return result
        else:
            if (max_prob >= confidence_threshold):
                result = result + " with good confidence " + confidence + "%"
                print(result)
                return result
            else:
                result = result + " with low confidence " + confidence + "%"
                print(result)
                return result

@app.route("/predict/hp", methods=["GET", "POST"])
def predict_hp():
    if request.method == "POST":
        print(request.files)

        if "file" not in request.files:
            return jsonify({"error": "No file selected"}), 400
        
        file = request.files['file']
        save_path = "user_uploads"

        filename = secure_filename("hp.png")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)

        loaded_image = load_image(file_path)
        prediction = model_hp.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        
        max_prob = np.max(prediction)
        confidence_threshold = 0.75
        confidence = str(round(max_prob * 100, 2))

        output = labels_hp[int(class_id)]
        result = str(output)

        if (max_prob <= 0.65):
            result = "Very Low Confidence (" + str(round(max_prob * 100, 2)) + "%) " + "Prediction. Please use another image."
            return result
        else:
            if (max_prob >= confidence_threshold):
                result = result + " with good confidence " + confidence + "%"
                print(result)
                return result
            else:
                result = result + " with low confidence " + confidence + "%"
                print(result)
                return result
    
@app.route("/predict/qa", methods=["GET", "POST"])
def predict_qa():
    if request.method == "POST":

        # userInputKeys = [] # For debugging only
        userInputValues = [] 
        
        for key, value in request.form.items():
            value = int(value)
            userInputValues.append(value)
            # userInputKeys.append(key) # For debugging only

        # print(userInputKeys)
        print("User Input Values:", userInputValues)

        userInput = [userInputValues]
        prediction = model_qa.predict(userInput)[0]
        result = int(prediction)

        max_prob = model_qa.predict_proba(userInput)[0]
        confidence_threshold = 0.75
        confidence = round(max(max_prob) * 100, 2)

        if (result == 0):
            if (max(max_prob) >= confidence_threshold):
                result = "Healthy" + " with good confidence " + str(confidence) + "%"
                print("Result is:", result)
            else:
                result = "Healthy" + " with low confidence " + str(confidence) + "%"
                print("Result is:", result)
        else:
            if (max(max_prob) >= confidence_threshold):
                result = "Lung Cancer Detected" + " with good confidence " + str(confidence) + "%"
                print("Result is:", result)
            else:
                result = "Lung Cancer Detected" + " with low confidence " + str(confidence) + "%"
                print("Result is:", result)
            
            print("Result is:", result)

        return result    


# Running Server
if __name__ == "__main__":
    app.run(debug=True, port=8000)

# Deployment Running Server
# if __name__ == "__main__":
#     app.run(debug=False, port=8000, host="0.0.0.0")