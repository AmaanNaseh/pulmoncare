import React from "react";
import { Link } from "react-router-dom";
import lungsIcon from "../assets/lungs.png";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold italic text-center mb-10">
          PulmOnCare
        </h1>

        <p className="text-justify mx-auto font-semibold italic my-5 p-4 md:px-10 lg:px-20">
          Pulmoncare is a modern website for diagnosing lungs cancer at an early
          stage through artificial intelligence. Since diagnosis is a
          time-consuming task for starting the medication, so doctors as well as
          patients can gain some insights regarding their condition from our
          website by using their medical imaging reports such as CT Scans, MRI
          Scans and Pathological Scans or going through a questionnaire.
          Pulmoncare also suggests some exercises for enhancing the condition of
          user's lungs as well as a virtual assistant is available 24/7 for
          user's support. We have displayed metrics of our software architecture
          for transparency as well as we have specified terms of service for
          legal usage of this website.
        </p>
      </div>

      <p className="text-lg lg:text-xl font-bold text-center my-4 mt-10">
        Our Diagnostic Tools
      </p>
      <div className="grid grid-cols-2 gap-8 p-4 relative">
        <Link
          to={"/predict/ct"}
          className="relative hover:scale-105 transition-all duration-100"
        >
          <div className="p-4 py-8 min-h-[125px] text-center font-bold">
            <span className="bg-[#06923e] p-2 md:p-4 text-xs md:text-lg lg:text-xl text-center">
              CT Scan Analysis
            </span>
          </div>
          <img
            src="/CT_Healthy.jpg"
            alt="..."
            className="absolute w-full h-full object-cover top-0 left-0 z-[-1]"
          />
        </Link>
        <Link
          to={"/predict/mri"}
          className="relative hover:scale-105 transition-all duration-100"
        >
          <div className="p-4 py-8 min-h-[125px] text-center font-bold">
            <span className="bg-[#06923e] p-2 md:p-4 text-xs md:text-lg lg:text-xl text-center">
              MRI Scan Analysis
            </span>
          </div>
          <img
            src="/MRI_Healthy.png"
            alt="..."
            className="absolute w-full h-full object-cover top-0 left-0 z-[-1]"
          />
        </Link>
        <Link
          to={"/predict/hp"}
          className="relative hover:scale-105 transition-all duration-100"
        >
          <div className="p-4 py-8 min-h-[125px] text-center font-bold">
            <span className="bg-[#06923e] p-2 md:p-4 text-xs md:text-lg lg:text-xl text-center">
              Pathological Analysis
            </span>
          </div>
          <img
            src="/HP_Healthy.jpeg"
            alt="..."
            className="absolute w-full h-full object-cover top-0 left-0 z-[-1]"
          />
        </Link>
        <Link
          to={"/predict/qa"}
          className="relative hover:scale-105 transition-all duration-100"
        >
          <div className="p-4 py-8 min-h-[125px] text-center font-bold">
            <span className="bg-[#06923e] p-2 md:p-4 text-xs md:text-lg lg:text-xl text-center">
              Questionnaire
            </span>
          </div>
          <img
            src="/Smoking_QA.jpg"
            alt="..."
            className="absolute w-full h-full object-cover top-0 left-0 z-[-1]"
          />
        </Link>

        {/* Center Logo */}
        <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] p-4 md:p-8 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black flex flex-col items-center justify-center">
          <img src={lungsIcon} alt="lungs" className="w-full" />
        </div>
      </div>

      <p className="text-lg lg:text-xl font-bold text-center my-4 mt-10">
        Exercises for Healthy Lungs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-f">
        <Link to={"/exercises/hold-breath"}>
          <div className="bg-[#093FB4] w-full min-h-[100px] flex flex-col items-center justify-center text-lg md:text-xl font-semibold p-4 min-w-[250px] rounded hover:scale-110 transition-all duration-100 mx-auto">
            Breath Holding Exercise
          </div>
        </Link>
        <Link to={"/exercises/pursed-lip-breathing"}>
          <div className="bg-[#093FB4] w-full min-h-[100px] flex flex-col items-center justify-center text-lg md:text-xl font-semibold p-4 min-w-[250px] rounded hover:scale-110 transition-all duration-100 mx-auto">
            Pursed Lip Breathing
          </div>
        </Link>
        <Link to={"/exercises/yoga"}>
          <div className="bg-[#093FB4] w-full min-h-[100px] flex flex-col items-center justify-center text-lg md:text-xl font-semibold p-4 min-w-[250px] rounded hover:scale-110 transition-all duration-100 mx-auto">
            Yoga Asanas
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
