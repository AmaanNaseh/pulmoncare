import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Terms of Service
      </h1>

      <div className="flex flex-col items-center justify-center gap-2 font-semibold my-4 mb-12 p-4 md:px-10">
        <p>Effective Date: 01-01-2025</p>
        <p className="text-justify mx-auto">
          Welcome to our website for AI-assisted lung cancer diagnosis. By
          accessing or using this website, you agree to the following terms and
          conditions. Please read them carefully.
        </p>
      </div>

      <div className="flex flex-col gap-4 p-4 md:px-10 text-justify">
        <div>
          <h1 className="font-bold">1. Purpose of the Website</h1>
          <p>
            This website is developed as a student project to assist in the
            early analysis of potential lung cancer cases using machine
            learning. It is designed solely for informational purposes to
            support healthcare professionals and patients with quicker insights
            & not for standalone diagnosis or treatment decisions.
          </p>
        </div>

        <div>
          <h1 className="font-bold">2. Machine Learning Models</h1>
          <p>
            Our platform uses four machine learning models developed by us based
            on MobileNetV2 transfer learning & Random Forest Classifier. All
            models have been trained on publicly available datasets from Kaggle.
            These models may not generalize perfectly to all real-world
            scenarios.{" "}
            <Link to={"/metrics"}>
              <span className="ml-2 font-bold hover:text-blue-500 border-b-[2px] border-white hover:border-b-blue-500 transition-all duration-100">
                More Details
              </span>
            </Link>
          </p>
        </div>

        <div>
          <h1 className="font-bold">3. No Medical Advice</h1>
          <p>
            This site does not provide professional medical advice. It is not a
            substitute for consultation with a licensed medical practitioner.
            You must not rely solely on the results provided here. Always
            consult a qualified doctor for diagnosis and treatment.
          </p>
        </div>

        <div>
          <h1 className="font-bold">4. Limitation of Liability</h1>
          <p>
            We are students, not a licensed medical or diagnostic firm. We make
            no guarantees about the accuracy, completeness, or reliability of
            the results. We will not be liable for any loss, harm, or
            consequences resulting from decisions made based on our platform
            without professional consultation.
          </p>
        </div>

        <div>
          <h1 className="font-bold">5. Use at Your Own Risk</h1>
          <p>By using this site, you acknowledge and agree that:</p>
          <ul className="list-disc ml-10">
            <li>You use the service at your own risk.</li>
            <li>
              You understand that the results are for educational and
              informational use only.
            </li>
            <li>
              You are solely responsible for how you use the information
              provided.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold">6. Modifications</h1>
          <p>
            We may update or change these Terms at any time without notice.
            Continued use of the website implies acceptance of the revised
            terms.
          </p>
        </div>

        <div>
          <h1 className="font-bold">7. Governing Law</h1>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of India.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
