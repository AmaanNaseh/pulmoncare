import React, { useEffect, useRef, useState } from "react";

const HoldBreath = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState("");

  const intervalRef = useRef(null);

  useEffect(() => {
    if (timerStarted) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev >= 60) {
            clearInterval(intervalRef.current);
            setTimerStarted(false);
            return 60;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [timerStarted]);

  useEffect(() => {
    if (count > 0 && count < 15) {
      setProgress("Weak Lungs, Continue Holding Breath");
    }
    if (count > 15 && count < 30) {
      setProgress("Average Lungs, Continue Holding Breath");
    }
    if (count > 30 && count < 60) {
      setProgress("Great Work So Far, Continue Holding Breath");
    }
    if (count === 60) {
      setProgress("Well Done!!! You have a healthy lungs. Relaease Breath");
      setTimerStarted(false);
    }
  }, [count]);

  return (
    <div>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Breath Holding Exercise
      </h1>

      <div
        className={`border-[4px] border-white rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto flex flex-col items-center justify-center gap-4`}
      >
        <p
          className={`text-4xl lg:text-6xl ${
            timerStarted ? "animate-ping" : ""
          }`}
        >
          {count}
        </p>
        <p
          className={`mt-10 ${count < 15 ? "text-red-700" : ""} ${
            count > 15 && count < 30 ? "text-orange-700" : ""
          } ${count > 30 ? "text-green-700" : ""}`}
        >
          {progress}
        </p>
      </div>

      <div className="flex items-center justify-center my-10">
        {!timerStarted ? (
          <button
            onClick={() => {
              setCount(0);
              setTimerStarted(true);
            }}
            className="bg-green-600 font-semibold px-4 py-2 rounded hover:scale-110 transition-all duration-100"
          >
            Start Timer
          </button>
        ) : (
          <button
            onClick={() => {
              setTimerStarted(false);
              clearInterval(intervalRef.current);
            }}
            className="bg-red-600 font-semibold px-4 py-2 rounded hover:scale-110 transition-all duration-100"
          >
            Stop Timer
          </button>
        )}
      </div>
    </div>
  );
};

export default HoldBreath;
