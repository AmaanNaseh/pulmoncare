import React from "react";
import acc_ct from "../assets/Accuracy_Curve_CT.png";
import loss_ct from "../assets/Loss_Curve_CT.png";
import acc_mri from "../assets/Accuracy_Curve_MRI.png";
import loss_mri from "../assets/Accuracy_Curve_MRI.png";
import acc_hp from "../assets/Accuracy_Curve_HP.png";
import loss_hp from "../assets/Accuracy_Curve_HP.png";
import cr_qa from "../assets/Classification_Report_QA.png";
import cm_qa from "../assets/Confusion_Matrix_QA.png";

const Metrics = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Metrics of AI Models
      </h1>

      <div className="flex flex-col gap-8 p-4 md:px-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Machine Details</h1>
          <ul className="list-disc ml-8">
            <li>Laptop Model: HP ZBook 15u G5</li>
            <li>
              Processor: Intel Core i7-8650U @ 1.90GHz, 4 Cores, 8 Threads
            </li>
            <li>RAM: 16 GB</li>
            <li>Operating System: Windows 11 Pro, 64-bit (Build 26100)</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold">IDE and Programming Language</h1>
          <p>
            All 4 AI models have been trained on the same machine on Python
            version 3.11.6 using Virtual Stuido Code. Python libraries with
            thier versions (specifically for models training) include:
          </p>
          <ul className="list-disc ml-8">
            <li>Pandas: 2.2.3</li>
            <li>Numpy: 1.26.4</li>
            <li>Matplotlib: 3.10.0</li>
            <li>Seaborn: 0.13.2</li>
            <li>Keras: 3.8.0</li>
            <li>Tensorflow: 2.18.0</li>
            <li>Scikit-Learn: 1.6.1</li>
            <li>Imblearn: 0.0</li>
            <li>Joblib: 1.4.2</li>
            <li>Other basic libraries for general tasks</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Models Details</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mx-auto">
            {/* CT SCAN */}
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">
                1. CT SCAN Model
                <a
                  href="https://www.kaggle.com/datasets/dishantrathi20/ct-scan-images-for-lung-cancer"
                  className="ml-1 font-normal border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Kaggle's Dataset)
                </a>
              </h1>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img src={acc_ct} alt="Accuracy Curve" className="w-full" />
                  </div>
                  <p className="text-center font-semibold">Accuracy Curve</p>
                </div>
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img src={loss_ct} alt="Loss Curve" className="w-full" />
                  </div>
                  <p className="text-center font-semibold">Loss Curve</p>
                </div>
              </div>
              <div className="mx-auto flex flex-col gap-1">
                <p className="font-semibold">Val Accuracy: 84.75120663642883</p>
                <p className="font-semibold">Val loss: 0.5871434807777405</p>
                <p className="font-semibold">
                  Training Classes (7) with number of training images:
                </p>
                <ul className="list-disc ml-8">
                  <li>Adeno Carcinoma : 310</li>
                  <li>Benign : 91</li>
                  <li>Healthy : 532</li>
                  <li>Invalid : 1250</li>
                  <li>Large Cell Carcinoma : 156</li>
                  <li>Malignant : 540</li>
                  <li>Squamous Cell Carcinoma : 242</li>
                </ul>
                <p className="font-semibold">Epochs: 6</p>
              </div>
            </div>

            {/* MRI SCAN */}
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">
                2. MRI SCAN Model
                <a
                  href="https://www.kaggle.com/datasets/xiaopengzhang12/lung-cancer-mri-images"
                  className="ml-1 font-normal border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Kaggle's Dataset)
                </a>
              </h1>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img
                      src={acc_mri}
                      alt="Accuracy Curve"
                      className="w-full"
                    />
                  </div>
                  <p className="text-center font-semibold">Accuracy Curve</p>
                </div>
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img src={loss_mri} alt="Loss Curve" className="w-full" />
                  </div>
                  <p className="text-center font-semibold">Loss Curve</p>
                </div>
              </div>
              <div className="mx-auto flex flex-col gap-1">
                <p className="font-semibold">Val Accuracy: 96.4483916759491</p>
                <p className="font-semibold">Val loss: 0.11847895383834839</p>
                <p className="font-semibold">
                  Training Classes (3) with number of training images:
                </p>
                <ul className="list-disc ml-8">
                  <li>Cancer : 1478</li>
                  <li>Healthy : 1781</li>
                  <li>Invalid : 1250</li>
                </ul>
                <p className="font-semibold">Epochs: 10</p>
              </div>
            </div>

            {/* Pathological SCAN */}
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">
                3. Pathological SCAN Model
                <a
                  href="https://www.kaggle.com/datasets/andrewmvd/lung-and-colon-cancer-histopathological-images"
                  className="ml-1 font-normal border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Kaggle's Dataset)
                </a>
              </h1>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img src={acc_hp} alt="Accuracy Curve" className="w-full" />
                  </div>
                  <p className="text-center font-semibold">Accuracy Curve</p>
                </div>
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img src={loss_hp} alt="Loss Curve" className="w-full" />
                  </div>
                  <p className="text-center font-semibold">Loss Curve</p>
                </div>
              </div>
              <div className="mx-auto flex flex-col gap-1">
                <p className="font-semibold">Val Accuracy: 99.5672345161438</p>
                <p className="font-semibold">Val loss: 0.013990799896419048</p>
                <p className="font-semibold">
                  Training Classes (4) with number of training images:
                </p>
                <ul className="list-disc ml-8">
                  <li>Adeno Carcinoma : 4975</li>
                  <li>Healthy : 4975</li>
                  <li>Invalid : 1250</li>
                  <li>Squamous Cell Carcinoma : 4975</li>
                </ul>
                <p className="font-semibold">Epochs: 24</p>
              </div>
            </div>

            {/* Questionnaire Based */}
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">
                4. Question Based Model
                <a
                  href="https://www.kaggle.com/datasets/humairmunir/lung-cancer-risk-dataset"
                  className="ml-1 font-normal border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Kaggle's Dataset)
                </a>
              </h1>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img
                      src={cr_qa}
                      alt="Classification Report"
                      className="w-full"
                    />
                  </div>
                  <p className="text-center font-semibold">
                    Classification Report
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-fit">
                  <div className="w-[250px]">
                    <img
                      src={cm_qa}
                      alt="Confusion Matrix"
                      className="w-full"
                    />
                  </div>
                  <p className="text-center font-semibold">Confusion Matrix</p>
                </div>
              </div>
              <div className="mx-auto">
                <p className="font-semibold">
                  Accuracy Score: 50.66666666666667
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Metrics;
