import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();
    // State to track the selected feature
    const [selectedFeature, setSelectedFeature] = useState("Predictive Maintenance");

    // Feature details mapping
    const featureSummaries = {
      "Predictive Maintenance": "Use AI to predict failures before they happen, reducing downtime and cutting maintenance costs.",
      "Optimization Tools": "Improve efficiency with real-time, data-driven decision-making powered by smart algorithms.",
      "Data Analysis": "Unlock valuable insights by analyzing complex data with advanced machine learning models."
  };

  // Expanded details for Feature Details section
  const featureDetails = {
      "Predictive Maintenance": `
          Predictive Maintenance leverages AI-driven analytics to forecast equipment failures before they happen, ensuring smooth operations and minimizing unexpected downtimes. 
          By continuously monitoring sensor data, AI algorithms can detect anomalies and predict when maintenance is required, reducing unnecessary maintenance costs.

          **Key Benefits:**
          - Prevent costly breakdowns and extend machinery lifespan.
          - Reduce downtime and improve production efficiency.
          - Minimize maintenance costs by focusing only on necessary repairs.
          - Enhance safety by identifying potential failures in advance.
      `,
      "Optimization Tools": `
          Optimization tools use machine learning and real-time data analytics to streamline workflows and improve operational efficiency. 
          These tools analyze historical and live data to recommend the best possible actions, improving resource allocation and reducing waste.

          **Key Benefits:**
          - Automate decision-making for better resource utilization.
          - Enhance productivity by identifying process bottlenecks.
          - Reduce waste and optimize material usage.
          - Improve overall operational efficiency and cost savings.
      `,
      "Data Analysis": `
          Data Analysis involves extracting meaningful insights from vast amounts of industrial data. 
          By leveraging advanced machine learning models, businesses can gain a deeper understanding of trends, predict future performance, and make data-driven decisions.

          **Key Benefits:**
          - Identify patterns and trends in production processes.
          - Improve decision-making with actionable insights.
          - Predict demand and optimize inventory management.
          - Gain a competitive edge through strategic data analysis.
      `
  };

    return (
        <>
           <div className="container mt-5">
      {/* Features Header */}
      <section className="text-center mb-5">
        <h2>Our Features</h2>
        <p className="lead">Discover how our machine learning solutions can optimize the mechanical industry.</p>
      </section>

      {/* Features List */}
    {/* Features List */}
    <section className="mb-5">
                <div className="row">
                    {Object.keys(featureSummaries).map((feature) => (
                        <div key={feature} className="col-md-4 mb-3">
                            <div 
                                className={`card p-3 shadow h-100 d-flex flex-column ${selectedFeature === feature ? "border-primary" : ""}`} 
                                onClick={() => setSelectedFeature(feature)} 
                                style={{ cursor: "pointer" }}
                            >
                                <h5>{feature}</h5>
                                <p className="flex-grow-1">{featureSummaries[feature]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Feature Details (Dynamic Content) */}
            <section className="mb-5">
                <h3 className="text-center">Feature Details</h3>
                <div className="card p-4 shadow">
                    <h5>{selectedFeature}</h5>
                    <p style={{ whiteSpace: "pre-line" }}>{featureDetails[selectedFeature]}</p>
                </div>
            </section>
                </div>
           
                   </>
    );
};

export default Features;