import React from "react";
import ContactPageHeader from "../Components/ContactComponent/ContactPageHeader";
import AboutUs from "../Components/ContactComponent/AboutUs";
import FeaturesSection from "../Components/Sections/FeaturesSection";
import MapContact from "../Components/ContactComponent/MapContact";
import FeatureContact from "../Components/ContactComponent/FeatureContact";

export default function Contact() {
  return (
    <>
      <div className="">
        <ContactPageHeader />
        <AboutUs />
        <br />
        <FeatureContact />
        <MapContact />
      </div>
    </>
  );
}
