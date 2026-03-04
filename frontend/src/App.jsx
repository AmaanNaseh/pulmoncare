import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Attributions from "./pages/Attributions";
import PredictCT from "./pages/prediction/PredictCT";
import PredictHP from "./pages/prediction/PredictHP";
import PredictMRI from "./pages/prediction/PredictMRI";
import PredictQA from "./pages/prediction/PredictQA";
import HoldBreath from "./pages/HoldBreath";
import PursedLipBreathing from "./pages/PursedLipBreathing";
import YogaAsans from "./pages/YogaAsans";
import Developers from "./pages/Developers";
import ResearchPaper from "./pages/ResearchPaper";
import TermsOfService from "./pages/TermsOfService";
import Metrics from "./pages/Metrics";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-2 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attributions" element={<Attributions />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/research-paper" element={<ResearchPaper />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/predict/ct" element={<PredictCT />} />
          <Route path="/predict/mri" element={<PredictMRI />} />
          <Route path="/predict/hp" element={<PredictHP />} />
          <Route path="/predict/qa" element={<PredictQA />} />
          <Route path="/exercises/hold-breath" element={<HoldBreath />} />
          <Route
            path="/exercises/pursed-lip-breathing"
            element={<PursedLipBreathing />}
          />
          <Route path="/exercises/yoga" element={<YogaAsans />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
