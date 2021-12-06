import React from "react";
import Feature from "./feature";

function FeaturesList() {
  return (
    <div className="page-section features">
      <div className="container">
        <div className="row justify-content-center">
          <Feature
            src="/assets/img/icon_pattern.svg"
            title="Provide financial advice by our advisor"
            text="Copywrite, blogpublic realations content translation."
          />
          <Feature
            src="/assets/img/icon_pattern.svg"
            title="Complete solutions for global organisations"
            text="Copywrite, blogpublic realations content translation."
          />
          <Feature
            src="/assets/img/icon_pattern.svg"
            title="Provide financial advice by our advisor"
            text="Copywrite, blogpublic realations content translation."
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;
