import React, { useState } from "react";
import axios from "axios";
import { ml_backend_url } from "../../config/Config";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PredictQA = () => {
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(0);
  const [smoking, setSmoking] = useState(0);
  const [yellowFingers, setYellowFingers] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [peerPressure, setPeerPressure] = useState(0);
  const [chronicDisease, setChronicDisease] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [allergy, setAllergy] = useState(0);
  const [wheezing, setWheezing] = useState(0);
  const [alcoholConsuming, setAlcoholConsuming] = useState(0);
  const [coughing, setCoughing] = useState(0);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(0);
  const [swallowingDifficulty, setSwallowingDifficulty] = useState(0);
  const [chestPain, setChestPain] = useState(0);

  const [prediction, setPrediction] = useState("Prediction");
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const handleSubmit = async () => {
    setIsLoaderVisible(true);

    if (!age) {
      setIsLoaderVisible(false);
      toast.error("Please fill Age!!");
      return;
    }

    const formData = new FormData();
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("smoking", smoking);
    formData.append("yellowFingers", yellowFingers);
    formData.append("anxiety", anxiety);
    formData.append("peerPressure", peerPressure);
    formData.append("chronicDisease", chronicDisease);
    formData.append("fatigue", fatigue);
    formData.append("allergy", allergy);
    formData.append("wheezing", wheezing);
    formData.append("alcoholConsuming", alcoholConsuming);
    formData.append("coughing", coughing);
    formData.append("shortnessOfBreath", shortnessOfBreath);
    formData.append("swallowingDifficulty", swallowingDifficulty);
    formData.append("chestPain", chestPain);

    try {
      const result = await axios.post(`${ml_backend_url}/predict/qa`, formData);
      setPrediction(result.data);
    } catch (err) {
      console.log(err);
      setIsLoaderVisible(false);
    }

    setIsLoaderVisible(false);
  };

  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        QUESTIONNAIRE
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
        <div className="w-fit min-w-[300px] lg:max-w-[1200px] mx-auto border-white border-[2px] p-4 py-8 flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Gender</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Age</label>
            <input
              type="number"
              className="text-black p-2 max-w-[75px]"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="0"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Smoking</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setSmoking(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Yellow Fingers</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setYellowFingers(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Anxiety</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setAnxiety(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Peer Pressure</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setPeerPressure(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Chronic Disease</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setChronicDisease(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Fatigue</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setFatigue(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Allergy</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setAllergy(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Wheezing</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setWheezing(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Alcohol Consuming</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setAlcoholConsuming(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Coughing</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setCoughing(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Shortness of Breath</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setShortnessOfBreath(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Swallowing difficulty</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setSwallowingDifficulty(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <label>Chest Pain</label>
            <select
              className="text-black p-2"
              onChange={(e) => {
                setChestPain(e.target.value);
              }}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            handleSubmit();
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
          <p className="font-semibold">Accuracy Score: 50.66666666666667</p>
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

export default PredictQA;
