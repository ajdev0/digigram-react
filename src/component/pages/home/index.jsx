import React from "react";
import FeaturesList from "./featuresList";
import Landing from "./landing";
import SectionOne from "./sectionOne";

function Home() {
  return (
    <div>
      <Landing />
      <main>
        <FeaturesList />
        <SectionOne />
      </main>
    </div>
  );
}

export default Home;
