import React from "react";
import ReviewPaperPDF from "../assets/Review_Paper.pdf";

const ReviewPaper = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Our Research Work
      </h1>
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="mx-auto w-full md:max-w-[450px] h-[660px]">
          <iframe src={ReviewPaperPDF} width={"100%"} height={"100%"}></iframe>
        </div>
        <h1 className="font-bold">
          Review Paper: Role of Artificial Intelligence in Early Diagnosis of
          Cancer
        </h1>
        <p className="font-semibold">
          Status: Under Publishing, presented in
          <a
            href="https://icapie2023.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 border-b-[2px] border-white hover:text-blue-500 hover:border-blue-500"
          >
            ICAPIE 2024
          </a>
        </p>
      </div>
    </>
  );
};

export default ReviewPaper;
