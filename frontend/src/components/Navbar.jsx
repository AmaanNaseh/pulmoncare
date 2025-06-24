import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between p-2 md:px-4 bg-[#a62c2c] md:rounded-b-[24px]">
      <Link to={"/"}>
        <h1 className="font-bold text-lg lg:text-xl hover:scale-110 transition-all duration-100">
          PulmOnCare
        </h1>
      </Link>
      <ul className="list-none inline-flex flex-wrap gap-4 font-semibold">
        <Link to={"/"}>
          <li className="hidden md:block hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100">
            Home
          </li>
        </Link>
        <Link to={"/terms-of-service"}>
          <li className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100">
            Terms of Service
          </li>
        </Link>
        <Link to={"/metrics"}>
          <li className="hover:scale-110 hover:border-b-[2px] hover:border-white transition-all duration-100">
            Metrics
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
