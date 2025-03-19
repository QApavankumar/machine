import React from "react";
import { useNavigate } from "react-router-dom";

const DataAnalysis = () => {
     const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary">Data Analysis for Mechanical Processes</h2>
            <p className="lead text-center">Explore how data analysis enhances efficiency and performance in mechanical industries.</p>
            
            <div className="mt-4">
                <h4>📊 What is Data Analysis in Mechanical Processes?</h4>
                <p>Data analysis involves collecting, processing, and interpreting data from machines, sensors, and industrial systems to optimize operations and improve decision-making.</p>
                
                <h4>🔍 How Does AI and Data Science Help?</h4>
                <ul>
                    <li>📈 Predicts equipment performance and maintenance needs</li>
                    <li>⚙️ Enhances process optimization and efficiency</li>
                    <li>📉 Reduces downtime and operational costs</li>
                </ul>

                <h4>🚀 Real-World Applications</h4>
                <p>Industries such as manufacturing, automotive, and energy leverage data-driven insights to improve quality control, optimize workflows, and reduce inefficiencies.</p>
            </div>
             {/* Go Back Button */}
             <div className="text-center mt-5">
                <button className="btn btn-primary" onClick={() => navigate(-1)}>
                    Back to Resources
                </button>
            </div>

        </div>
    );
};

export default DataAnalysis;
