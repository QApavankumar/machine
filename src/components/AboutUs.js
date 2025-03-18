import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container mt-5">
                {/* Company Background Section */}
                <section className="text-center mb-5">
                    <h2>About Us</h2>
                    <p className="lead">
                        Our mission is to revolutionize the mechanical industry with cutting-edge
                        machine learning solutions. From predictive maintenance to data-driven
                        optimization, we empower businesses to enhance efficiency and reduce
                        operational costs.
                    </p>
                </section>

                {/* Team Section */}
                <section className="mb-5">
                    <h3 className="text-center">Meet Our Team</h3>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="card p-3 shadow">
                                <img
                                    src="https://images.pexels.com/photos/7580961/pexels-photo-7580961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    className="card-img-top rounded-circle mx-auto d-block"
                                    alt="Team Member 1"
                                    style={{ width: "100px", height: "100px" }}
                                />
                                <h5 className="mt-3">John Doe</h5>
                                <p>Founder & CEO</p>
                                <p className="text-muted">An expert in AI-driven solutions with 10+ years of experience.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 shadow">
                                <img
                                    src="https://images.pexels.com/photos/9242820/pexels-photo-9242820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    className="card-img-top rounded-circle mx-auto d-block"
                                    alt="Team Member 2"
                                    style={{ width: "100px", height: "100px" }}
                                />
                                <h5 className="mt-3">Jane Smith</h5>
                                <p>Chief Data Scientist</p>
                                <p className="text-muted">Specialist in machine learning models for industrial applications.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 shadow">
                                <img
                                    src="https://images.pexels.com/photos/8122068/pexels-photo-8122068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    className="card-img-top rounded-circle mx-auto d-block"
                                    alt="Team Member 3"
                                    style={{ width: "100px", height: "100px" }}
                                />
                                <h5 className="mt-3">Michael Lee</h5>
                                <p>Lead Engineer</p>
                                <p className="text-muted">Expert in developing AI-powered mechanical solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default AboutUs;