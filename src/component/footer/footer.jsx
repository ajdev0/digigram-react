import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-3 py-3">
            <h3>
              Digi<span className="text-primary">Gram.</span>
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <p>
              <Link to="/">digigram@mail.com</Link>
            </p>
            <p>
              <Link to="/">+00 1122 3344 5566</Link>
            </p>
          </div>
          <div className="col-lg-3 py-3">
            <h5>Quick Links</h5>
            <ul className="footer-menu">
              <li>
                <Link to="/">How it works</Link>
              </li>
              <li>
                <Link to="/">Security</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
              <li>
                <Link to="/">Report a Bug</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 py-3">
            <h5>About Us</h5>
            <ul className="footer-menu">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Jobs</Link>
              </li>
              <li>
                <Link to="/">Our Teams</Link>
              </li>
              <li>
                <Link to="/">Testimonials</Link>
              </li>
              <li>
                <Link to="/">News & Press</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 py-3">
            <h5>Subscribe</h5>
            <form action="/">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mail.."
              />
            </form>

            <div className="sosmed-button mt-4">
              <Link to="/">
                <span className="mai-logo-facebook-f"></span>
              </Link>
              <Link to="/">
                <span className="mai-logo-twitter"></span>
              </Link>
              <Link to="/">
                <span className="mai-logo-google"></span>
              </Link>
              <Link to="/">
                <span className="mai-logo-linkedin"></span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 py-2">
            <p id="copyright">
              &copy; 2020 <Link to="https://macodeid.com/">MACode ID</Link>. All
              rights reserved
            </p>
          </div>
          <div className="col-sm-6 py-2 text-right">
            <div className="d-inline-block px-3">
              <Link to="/">Privacy</Link>
            </div>
            <div className="d-inline-block px-3">
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
