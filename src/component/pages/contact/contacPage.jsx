import React from "react";
import PageHeader from "../../common/pageHeader";
import Contact from "./contact";

function ContacPage() {
  return (
    <div>
      <PageHeader pageTitle="Contact Us" />
      <main>
        <Contact />
      </main>
    </div>
  );
}

export default ContacPage;
