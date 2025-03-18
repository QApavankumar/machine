import React from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();
    return (
        <>
           <div className="container mt-5">
      {/* Features Header */}
      <section className="text-center mb-5">
        <h2>Our Features</h2>
        <p className="lead">Discover how our machine learning solutions can optimize the mechanical industry.</p>
      </section>

      {/* Features List */}
      <section className="mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Predictive Maintenance</h5>
              <p>Use AI to detect potential failures before they occur, reducing downtime and maintenance costs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Optimization Tools</h5>
              <p>Enhance operational efficiency with real-time data-driven decision-making algorithms.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Data Analysis</h5>
              <p>Gain valuable insights by analyzing complex datasets using advanced machine learning techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="mb-5">
        <h3 className="text-center">Feature Details</h3>
        <div className="accordion" id="featureAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Predictive Maintenance
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#featureAccordion">
              <div className="accordion-body">
                Predict equipment failures before they happen, ensuring smooth production and reduced costs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Optimization Tools
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#featureAccordion">
              <div className="accordion-body">
                Improve resource utilization and streamline workflows with AI-powered optimization strategies.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Data Analysis
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#featureAccordion">
              <div className="accordion-body">
                Extract meaningful insights from large datasets, helping businesses make informed decisions.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
           
                   </>
    );
};

export default Features;