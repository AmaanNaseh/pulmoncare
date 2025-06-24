import React from "react";
import AmaanPhoto from "../assets/Amaan.jpg";
import YusufPhoto from "../assets/Yusuf.jpg";
import ZianPhoto from "../assets/Zian.jpg";
import RashidPhoto from "../assets/Rashid.jpg";
import KhyatiPhoto from "../assets/Khyati.jpg";
import ArvinderPhoto from "../assets/Arvinder.jpg";
import LinkedInLogo from "../assets/linkedin.png";

const Developers = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Developers
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-[300px]">
            <img src={AmaanPhoto} alt="Amaan Naseh" className="w-full" />
          </div>
          <h1 className="flex flex-wrap items-center justify-between gap-5 font-bold">
            Amaan Naseh
            <a
              href="https://www.linkedin.com/in/amaan-naseh/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 hover:border-[#0077b5] hover:border-[2px] transition-all duration-100 p-1"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-[25px] h-[25px]"
              />
            </a>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-[300px]">
            <img src={YusufPhoto} alt="Yusuf Azam" className="w-full" />
          </div>
          <h1 className="flex flex-wrap items-center justify-between gap-5 font-bold">
            Yusuf Azam
            <a
              href="https://www.linkedin.com/in/mdyusufazam/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 hover:border-[#0077b5] hover:border-[2px] transition-all duration-100 p-1"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-[25px] h-[25px]"
              />
            </a>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-[300px]">
            <img src={ZianPhoto} alt="Zian Malik" className="w-full" />
          </div>
          <h1 className="flex flex-wrap items-center justify-between gap-5 font-bold">
            Zian Malik
            <a
              href="https://www.linkedin.com/in/ziyan-malik-150822209/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 hover:border-[#0077b5] hover:border-[2px] transition-all duration-100 p-1"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-[25px] h-[25px]"
              />
            </a>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-[300px]">
            <img src={RashidPhoto} alt="Mohammad Rashid" className="w-full" />
          </div>
          <h1 className="flex flex-wrap items-center justify-between gap-5 font-bold">
            Mohammad Rashid
            <a
              href="https://www.linkedin.com/in/mohammad-rashid-357a02248/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 hover:border-[#0077b5] hover:border-[2px] transition-all duration-100 p-1"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-[25px] h-[25px]"
              />
            </a>
          </h1>
        </div>
      </div>

      <p className="font-bold text-lg my-8 mx-auto text-justify px-4 md:px-10 lg:px-20">
        Special Thanks to our university @University School of Automation and
        Robotics, Dean Arvinder Kaur ma'am (2025) and our mentor Dr. Khyati
        Chopra ma'am.
      </p>

      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-[300px]">
            <img
              src={ArvinderPhoto}
              alt="Dean Arvinder Kaur Ma'am"
              className="w-full"
            />
          </div>
          <h1 className="flex flex-wrap items-center justify-between gap-5 font-bold">
            Dean Arvinder Kaur
            <a
              href="https://www.linkedin.com/in/arvinder-kaur-37b09a62/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 hover:border-[#0077b5] hover:border-[2px] transition-all duration-100 p-1"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-[25px] h-[25px]"
              />
            </a>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-[300px]">
            <img
              src={KhyatiPhoto}
              alt="Dr. Khyati Chopra Ma'am"
              className="w-full"
            />
          </div>
          <h1 className="flex flex-wrap items-center justify-between gap-5 font-bold">
            Dr. Khyati Chopra
            <a
              href="https://www.linkedin.com/in/dr-khyati-chopra-8332b5253/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 hover:border-[#0077b5] hover:border-[2px] transition-all duration-100 p-1"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-[25px] h-[25px]"
              />
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Developers;
