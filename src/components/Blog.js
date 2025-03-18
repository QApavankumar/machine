import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Predictive Maintenance", "Optimization", "Data Analysis"];

    const blogPosts = [
        { id: 1, title: "The Future of Predictive Maintenance", category: "Predictive Maintenance", content: "Machine learning is revolutionizing how industries predict equipment failures before they happen." },
        { id: 2, title: "AI-Powered Optimization Tools", category: "Optimization", content: "Discover how AI-driven optimization enhances efficiency in mechanical processes." },
        { id: 3, title: "Harnessing Data for Smarter Decisions", category: "Data Analysis", content: "Big data analytics is shaping the future of industrial decision-making." },
        { id: 4, title: "Machine Learning in Manufacturing", category: "Predictive Maintenance", content: "How ML models help manufacturers reduce costs and improve productivity." }
    ];

    const filteredPosts = selectedCategory === "All" ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            <div className="container mt-5">
                {/* Blog Header */}
                <h2 className="text-center">Blog & Insights</h2>
                <p className="text-center lead">Explore the latest trends and innovations in machine learning for the mechanical industry.</p>

                {/* Category Filter */}
                <div className="d-flex justify-content-center my-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`btn mx-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts */}
                <div className="row">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="col-md-6 mb-4">
                            <div className="card shadow p-3">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                                <span className="badge bg-secondary">{post.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
};

export default Blog;