import React from "react";
import PLB_1 from "../assets/PLB_1.png";
import PLB_2 from "../assets/PLB_2.png";
import PLB_4 from "../assets/PLB_4.png";

const PursedLipBreathing = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Pursed Lip Breathing Exercise
      </h1>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="font-semibold flex flex-col items-center justify-center gap-4">
          <p className="max-w-[75%] text-center">
            Step 1: Relax your neck and shoulder and sit in straight posture on
            a hard surface like ground or chair.
          </p>
          <div className="w-[200px] h-[200px]">
            <img src={PLB_1} alt="Step 1" className="w-full h-full" />
          </div>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="font-semibold flex flex-col items-center justify-center gap-4">
          <p>Step 2: Close your mouth and inhale from nose slowly.</p>
          <div className="w-[200px] h-[200px]">
            <img src={PLB_2} alt="Step 2" className="w-full h-full" />
          </div>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="font-semibold flex flex-col items-center justify-center gap-4">
          <p>Step 3: Hold Breath for 3-5 seconds.</p>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="font-semibold flex flex-col items-center justify-center gap-4">
          <p className="max-w-[75%] text-center">
            Step 4: Exhale from mouth as if you are blowing whistle, make sure
            exhalation time is longer than inhalation.
          </p>
          <div className="w-[200px] h-[200px]">
            <img src={PLB_4} alt="Step 4" className="w-full h-full" />
          </div>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="font-semibold flex flex-col items-center justify-center gap-4">
          <p>Repeat All Steps for atleast 5 minutes.</p>
        </div>
      </div>
    </>
  );
};

export default PursedLipBreathing;
