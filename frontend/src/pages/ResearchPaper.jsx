import React from "react";
import ResearchPaperPDF from "../assets/IJSRED-V9I2P9.pdf";

const ResearchPaper = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Our Research Work
      </h1>
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="mx-auto w-full md:max-w-[450px] h-[660px]">
          <iframe
            src={ResearchPaperPDF}
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>

        <p className="font-semibold">
          Publication DOI:
          <a
            href="https://doi.org/10.5281/zenodo.18871983"
            target="_blank"
            rel="noreferrer"
            className="ml-2 border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
          >
            10.5281/zenodo.18871983
          </a>
        </p>
      </div>
    </>
  );
};

export default ResearchPaper;
