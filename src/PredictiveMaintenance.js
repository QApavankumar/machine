import React from "react";
import { useNavigate } from "react-router-dom";
const PredictiveMaintenance = () => {
     const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary">Predictive Maintenance Using AI</h2>
            <p className="lead text-center">Explore how AI-driven predictive maintenance helps industries prevent failures before they occur.</p>
            
            <div className="mt-4">
                <h4>🔍 What is Predictive Maintenance?</h4>
                <p>Predictive maintenance leverages machine learning and sensor data to forecast equipment failures. This reduces downtime, minimizes costs, and improves efficiency.</p>
                
                <h4>📊 How Does AI Help?</h4>
                <ul>
                    <li>🛠️ Analyzes sensor readings in real-time</li>
                    <li>📉 Detects anomalies before failures occur</li>
                    <li>🔄 Optimizes maintenance schedules</li>
                </ul>

                <h4>🚀 Industries Benefiting from AI</h4>
                <p>Manufacturing, transportation, and energy sectors are using AI-driven predictive maintenance to streamline operations and prevent costly repairs.</p>
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

export default PredictiveMaintenance;
