import React from "react";
import FeaturesList from "./featuresList";
import Landing from "./landing";
import SectionOne from "./sectionOne";
import SiteStatics from "./siteStatics";

function Home() {
  return (
    <div>
      <Landing />
      <main>
        <FeaturesList />
        <SectionOne />
        <SiteStatics />
      </main>
    </div>
  );
}

export default Home;
