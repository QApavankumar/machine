import React from "react";
import { useNavigate } from "react-router-dom";

const GettingStartedML = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <h2 className="text-center">Getting Started with Machine Learning</h2>
            <p className="lead text-center">
                Learn the fundamentals of Machine Learning and how to apply it in real-world scenarios.
            </p>

            {/* Introduction Section */}
            <div className="mt-4">
                <h3>Introduction to Machine Learning</h3>
                <p>
                    Machine Learning (ML) is a branch of artificial intelligence that enables computers to learn patterns 
                    from data and make predictions without explicit programming. It is widely used in applications like 
                    fraud detection, speech recognition, and predictive analytics.
                </p>
            </div>

            {/* Key Concepts */}
            <div className="mt-4">
                <h3>Key Concepts in Machine Learning</h3>
                <ul className="list-group">
                    <li className="list-group-item">Supervised Learning - Learning from labeled data</li>
                    <li className="list-group-item">Unsupervised Learning - Finding patterns in unlabeled data</li>
                    <li className="list-group-item">Reinforcement Learning - Learning by interacting with an environment</li>
                    <li className="list-group-item">Feature Engineering - Selecting the right data for models</li>
                </ul>
            </div>

            {/* Steps to Get Started */}
            <div className="mt-4">
                <h3>Steps to Get Started</h3>
                <p>To begin your journey in ML, follow these steps:</p>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item">Learn Python and ML libraries like NumPy, Pandas, and Scikit-Learn.</li>
                    <li className="list-group-item">Understand the basics of data preprocessing and visualization.</li>
                    <li className="list-group-item">Start with simple projects like linear regression and classification.</li>
                    <li className="list-group-item">Explore deep learning frameworks such as TensorFlow and PyTorch.</li>
                    <li className="list-group-item">Practice by working on real-world datasets and Kaggle competitions.</li>
                </ol>
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

export default GettingStartedML;
