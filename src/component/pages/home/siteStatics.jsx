import React from "react";
class SiteStatics extends React.Component {
  state = {
    invest: 816278,
    revenue: 216422,
    ration: 73,
  };
  render() {
    const { invest, revenue, ration } = this.state;
    return (
      <div className="page-section counter-section">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-4">
              <p>Total Invest</p>
              <h2>
                $<span className="number" data-number={invest}></span>
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Yearly Revenue</p>
              <h2>
                $<span className="number" data-number={revenue}></span>
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Growth Ration</p>
              <h2>
                <span className="number" data-number={ration}></span>%
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SiteStatics;
