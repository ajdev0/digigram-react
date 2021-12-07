import React from "react";
import ConactForm from "./contacForm";

const Contact = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Get in Touch</h2>
            <div className="divider"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Laborum
              ratione autem quidem veritatis!
            </p>

            <ul className="contact-list">
              <li>
                <div className="icon">
                  <span className="mai-map"></span>
                </div>
                <div className="content">123 Fake Street, New York, USA</div>
              </li>
              <li>
                <div className="icon">
                  <span className="mai-mail"></span>
                </div>
                <div className="content">
                  <a href="#">info@digigram.com</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="mai-phone-portrait"></span>
                </div>
                <div className="content">
                  <a href="#">+00 1122 3344 55</a>
                </div>
              </li>
            </ul>
          </div>
          <ConactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
