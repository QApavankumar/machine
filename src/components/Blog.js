import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Predictive Maintenance", "Optimization", "Data Analysis"];

    const blogPosts = [
        { 
            id: 1, 
            title: "The Future of Predictive Maintenance", 
            category: "Predictive Maintenance", 
            content: "Machine learning is revolutionizing how industries predict equipment failures before they happen. AI-driven predictive maintenance systems analyze historical data, sensor readings, and operational patterns to identify potential breakdowns before they occur. \n\nBy implementing predictive maintenance, companies can minimize downtime, reduce maintenance costs, and extend the lifespan of critical machinery. For example, industries such as manufacturing, energy, and transportation leverage IoT-enabled sensors that continuously monitor equipment health, feeding data into machine learning models for real-time anomaly detection. \n\nThis technology allows maintenance teams to perform necessary repairs proactively rather than reacting to unexpected failures. As predictive maintenance advances, industries will continue to shift from traditional maintenance schedules to more data-driven and intelligent maintenance strategies, ensuring efficiency and reliability. Additionally, AI-powered diagnostics are improving failure prediction accuracy, allowing companies to make better-informed maintenance decisions and optimize overall performance."
        },
        { 
            id: 2, 
            title: "AI-Powered Optimization Tools", 
            category: "Optimization", 
            content: "Discover how AI-driven optimization enhances efficiency in mechanical processes. Artificial intelligence is transforming industrial workflows by improving resource allocation, reducing energy consumption, and automating complex decision-making. \n\nFor instance, AI-driven scheduling tools optimize production lines by balancing workloads, minimizing delays, and predicting demand fluctuations. In addition, AI-powered supply chain management systems analyze global market trends, logistics, and procurement data to optimize inventory and distribution strategies. \n\nMoreover, AI-driven quality control systems use computer vision to detect defects in real-time, reducing material waste and improving overall product quality. Energy optimization models also analyze consumption patterns and suggest strategies for reducing power usage, leading to significant cost savings. As AI technology continues to evolve, industries will increasingly rely on these optimization tools to improve efficiency, sustainability, and competitiveness."
        },
        { 
            id: 3, 
            title: "Harnessing Data for Smarter Decisions", 
            category: "Data Analysis", 
            content: "Big data analytics is shaping the future of industrial decision-making. Companies now have access to massive amounts of structured and unstructured data, ranging from production metrics to customer feedback. AI and machine learning models process this data, uncovering patterns and insights that were previously impossible to detect with traditional methods. \n\nFor instance, predictive analytics in supply chain management enables businesses to forecast demand more accurately, reducing stockouts and overproduction. In manufacturing, data-driven insights help optimize machine performance and minimize downtime. \n\nFurthermore, AI-powered analytics tools assist engineers in designing more efficient and cost-effective systems by analyzing past performance and simulating future scenarios. As industries continue to embrace big data, organizations that leverage AI-driven analytics will gain a competitive edge in innovation and efficiency. Real-time analytics dashboards now provide instant insights, enabling managers to respond faster to market changes, increasing productivity and competitiveness."
        },
        { 
            id: 4, 
            title: "Machine Learning in Manufacturing", 
            category: "Predictive Maintenance", 
            content: "How ML models help manufacturers reduce costs and improve productivity. With machine learning, manufacturers can monitor production lines in real-time, detecting inefficiencies and predicting potential failures before they disrupt operations. \n\nOne of the most significant advantages of ML in manufacturing is its ability to automate quality control processes. AI-driven visual inspection systems analyze products for defects with greater accuracy than human inspectors, leading to higher consistency and fewer errors. \n\nAdditionally, ML-powered robotics enhance automation, allowing factories to operate more efficiently and reduce reliance on manual labor. Another key application of ML is demand forecasting, where AI models analyze market trends, customer behavior, and historical sales data to predict future demand. This enables manufacturers to optimize inventory, reduce waste, and align production schedules with actual market needs. As AI technology advances, the role of machine learning in manufacturing will only expand, leading to smarter, more agile, and cost-effective industrial operations."
        }
    ];
    
        
    const filteredPosts = selectedCategory === "All" ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            <div className="container mt-5">
                {/* Blog Header */}
                <h2 className="text-center">Blog & Insights</h2>
                <p className="text-center lead">Explore the latest trends and innovations in machine learning for the mechanical industry.</p>

                {/* Category Filter */}
                <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts */}
                <div className={`row ${filteredPosts.length === 1 ? "d-flex justify-content-center" : ""}`}>
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="col-md-6 mb-4">
                            <div className="card shadow p-3 h-100 d-flex flex-column">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text flex-grow-1">{post.content}</p>
                                <span className="badge bg-secondary align-self-start">{post.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
