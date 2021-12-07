import React from "react";
import FeaturesList from "./featuresList";
import Landing from "./landing";
import PriceList from "./priceList";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionWhy from "./sectionWhy";
import SiteStatics from "./siteStatics";
import Carousel from "./carousel";
import Contact from "../contact/contact";
import FeatureBlogs from "../../blog/featureBlogs";
import Clients from "../../common/clients";
import Footer from "../../footer/footer";

function Home() {
  return (
    <div>
      <Landing />
      <main>
        <FeaturesList />
        <SectionOne />
        <SiteStatics />
        <SectionTwo />
        <SectionWhy />
        <PriceList />
        <Carousel />
        <Contact />
        <FeatureBlogs />
        <Clients />
      </main>
    </div>
  );
}

export default Home;
