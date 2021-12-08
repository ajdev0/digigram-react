import React from "react";
import PageHeader from "../common/pageHeader";
import SectionTwo from "../pages/home/sectionTwo";
import SectionWhy from "./home/sectionWhy";
const Services = () => {
  return (
    <div>
      <PageHeader pageTitle="Services" />
      <main>
        <SectionTwo />
        <SectionWhy />
      </main>
    </div>
  );
};

export default Services;
