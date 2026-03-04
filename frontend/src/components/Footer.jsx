import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full p-2 md:px-4 bg-[#982b1c] md:rounded-t-[24px] flex flex-col items-center justify-center gap-2 pt-4">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Link to={"/attributions"}>
          <p className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100 font-semibold">
            Attributions
          </p>
        </Link>
        <Link to={"/developers"}>
          <p className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100 font-semibold">
            Developers
          </p>
        </Link>
        <Link to={"/research-paper"}>
          <p className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100 font-semibold">
            Research Work
          </p>
        </Link>
        <Link to={"/terms-of-service"}>
          <p className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100 font-semibold">
            Terms of Service
          </p>
        </Link>
        <Link to={"/metrics"}>
          <p className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100 font-semibold">
            Metrics
          </p>
        </Link>
        <Link to={"/contact"}>
          <p className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100 font-semibold">
            Contact
          </p>
        </Link>
      </div>
      <p className="mt-4">
        {" "}
        &copy;All Rights Reserved @{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
