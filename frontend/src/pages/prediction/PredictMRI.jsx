import axios from "axios";
import React, { useState } from "react";
import { ml_backend_url } from "../../config/Config";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PredictMRI = () => {
  const [prediction, setPrediction] = useState("Prediction");
  const [image, setImage] = useState("");
  const [displayImage, setDisplayImage] = useState("/MRI_Healthy.png");
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const handlePost = async () => {
    setIsLoaderVisible(true);

    if (!image) {
      setIsLoaderVisible(false);
      toast.error("Please select image!!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const result = await axios.post(
        `${ml_backend_url}/predict/mri`,
        formData
      );
      setPrediction(result.data);
      setIsLoaderVisible(false);
    } catch (err) {
      console.log(err);
      setIsLoaderVisible(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        MRI SCAN ANALYSIS
      </h1>

      <p className="text-justify my-8 bg-red-700 font-semibold p-2 max-w-[90%] lg:max-w-[75%] mx-auto">
        We do not guarantee consequences of any result. It is just made for
        educational purpose. Always consult doctor before taking any medication
        related to your health else only you will be responsible for your
        actions. We have also provided ML model metrics such as accuracy of
        predictions for transparency. Before using the website, you must check
        <Link
          to={"/terms-of-service"}
          className="mx-2 border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
        >
          Terms of Service
        </Link>
        .
      </p>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-[300px] h-[300px] border-[2px] border-white relative p-2">
          <img
            src={displayImage}
            alt="..."
            className={`w-full h-full ${
              displayImage === "/MRI_Healthy.png" ? "opacity-75" : ""
            }`}
          />
          {displayImage === "/MRI_Healthy.png" ? (
            <p className="bg-red-700 p-2 font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              EXAMPLE IMAGE
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <label>Upload MRI Scan</label>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setDisplayImage(URL.createObjectURL(e.target.files[0]));
            }}
            className="p-4 border-white border-[2px] text-xs"
          />
        </div>

        <button
          onClick={() => {
            handlePost();
          }}
          className="bg-white text-black font-bold px-4 py-2 rounded-sm hover:scale-110 transition-all duration-100"
        >
          Predict
        </button>

        {isLoaderVisible ? (
          <div className="w-[50px] h-[50px] rounded-full border-[4px] border-white border-t-blue-600 animate-spin"></div>
        ) : (
          ""
        )}

        {prediction !== "Prediction" ? (
          <p
            className={`text-lg lg:text-xl font-bold p-2 ${
              prediction.includes("Healthy")
                ? "bg-green-600"
                : prediction.includes("Low")
                ? ""
                : "bg-red-600"
            }`}
          >
            {prediction}
          </p>
        ) : (
          ""
        )}

        <div className="flex flex-col items-start justify-center gap-4 bg-red-700 p-2">
          <h1 className="font-bold mx-auto text-lg lg:text-xl">
            AI Model Metrics
          </h1>
          <p className="font-semibold">Val Accuracy: 96.4483916759491</p>
          <p className="font-semibold">Val loss: 0.11847895383834839</p>
          <Link to={"/metrics"} className="mx-auto">
            <p className="font-bold hover:text-blue-500 border-b-[2px] border-white hover:scale-110 hover:border-b-blue-500 transition-all duration-100">
              More Details
            </p>
          </Link>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PredictMRI;
