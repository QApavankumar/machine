import React from "react";
import { useNavigate } from "react-router-dom";

const Resources = () => {
    const navigate = useNavigate();
    const datasets = [
        { name: "Predictive Maintenance Dataset", link: "/pdfs/predictive_maintenance.pdf" },
        { name: "Optimization Algorithms Dataset", link: "/pdfs/Optimization_Algorithm.pdf" },
        { name: "Industrial Sensor Data", link: "/pdfs/sensor_data.pdf" }
      ];
    
      const tutorials = [
        { title: "Getting Started with Machine Learning", link: "/GettingStartedML" },
        { title: "Predictive Maintenance Using AI", link: "/PredictiveMaintenance" },
        { title: "Data Analysis for Mechanical Processes", link: "/DataAnalysis" }
      ];
    
    return (
        <>
             <div className="container mt-5">
      <h2 className="text-center">Machine Learning Resources</h2>
      <p className="text-center lead">Explore datasets and tutorials to enhance your understanding of machine learning in the mechanical industry.</p>
      
      {/* Datasets Section */}
      <div className="mt-4">
        <h3>Datasets</h3>
        <ul className="list-group">
          {datasets.map((dataset, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {dataset.name}
              <a href={dataset.link} download className="btn btn-primary btn-sm">Download</a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Tutorials Section */}
      <div className="mt-5">
        <h3>Tutorials</h3>
        <ul className="list-group">
          {tutorials.map((tutorial, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {tutorial.title}
              <a href={tutorial.link} className="btn btn-outline-primary btn-sm">Read</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

        </>
    );
};

export default Resources;