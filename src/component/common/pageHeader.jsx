import React from "react";
import { Link } from "react-router-dom";

function PageHeader({ pageTitle }) {
  return (
    <header>
      <div className="container mt-5">
        <div className="page-banner">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-6">
              <nav aria-label="Breadcrumb">
                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">{pageTitle}</li>
                </ul>
              </nav>
              <h1 className="text-center">{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
