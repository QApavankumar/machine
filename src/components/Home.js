import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="app-container">
                <div className="main-content">
                    <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src="https://thriam.com/img/Image/blog/mechanical-engineering-with-machine-learning-approaches/mechanical-engineering-with-machine-learning-approaches-blog-banner-by-Thriam.webp" className="d-block w-100" alt="Slide 1" />
                            </div>

                            <div className="carousel-item">
                                <img src="https://blog.rgbsi.com/hubfs/Machine-Learning---1200x-628.jpg" className="d-block w-100" alt="Slide 1" />
                            </div>

                            <div className="carousel-item">
                                <img src="https://media.licdn.com/dms/image/v2/D5612AQGkYRJlsjd_AA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718705806464?e=2147483647&v=beta&t=m5KiPKE_9s-yNucpQV9dgskytHfyFcw82a21U4I1r7k" className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://alpha-numero.com/wp-content/uploads/2022/09/Impact-of-artificial-intelligence-on-mechanical-engineering-design.jpg" className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>

                 {/* Introduction Section */}
      <section className="text-center mb-5">
        <h2>Welcome to Our Machine Learning Platform</h2>
        <p className="lead">
          Explore the power of AI-driven solutions in the mechanical industry.
          Unlock predictive maintenance, optimization tools, and advanced data analysis.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-5">
        <h3 className="text-center">Key Features</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Predictive Maintenance</h5>
              <p>Prevent breakdowns with AI-driven maintenance insights.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Optimization Tools</h5>
              <p>Enhance efficiency through machine learning-based optimizations.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Data Analysis</h5>
              <p>Gain valuable insights from real-time data analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-5">
        <h3 className="text-center">What Our Users Say</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 shadow">
              <p>"This platform has revolutionized our maintenance process!"</p>
              <p><strong>- John Doe, Industry Expert</strong></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 shadow">
              <p>"Incredible insights that boosted our production efficiency!"</p>
              <p><strong>- Jane Smith, Engineer</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h3>Get Started Today!</h3>
        <p>Join our platform and enhance your mechanical industry operations.</p>
        <button className="btn btn-primary me-2">Sign Up</button>
        <button className="btn btn-outline-secondary">Learn More</button>
      </section>


                <footer className="bg-dark text-white text-center py-3 mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/Blog" className="text-white">Blog</Link></li>
                                    <li><Link to="/ContactUs" className="text-white">ContactUs</Link></li>
                                    <li><Link to="/AboutUs" className="text-white">AboutUs</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h5>Contact Us</h5>
                                <p>Email: support@MachineLearning.com</p>
                                <p>Phone: +123 456 7890</p>
                            </div>
                            <div className="col-md-4">
                                <h5>Follow Us</h5>
                                <a href="https://www.facebook.com/login/" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                                <a href="https://x.com/i/flow/login" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-white"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <hr className="bg-light" />
                        <p className="mb-0">&copy; {new Date().getFullYear()} Travel Booking App. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;