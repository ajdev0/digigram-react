import React from "react";
import Clients from "../common/clients";
import SectionOne from "./home/sectionOne";
import Carousel from "../pages/home/carousel";
import SiteStatics from "./home/siteStatics";
import PageHeader from "../common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader pageTitle="About Us" />
      <main>
        <SectionOne />
        <SiteStatics />
        <Carousel />
        <Clients />
      </main>
    </>
  );
};

export default About;
