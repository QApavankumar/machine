import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Home.css';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { text: "This platform has revolutionized our maintenance process!", author: "John Doe, Industry Expert" },
  { text: "Incredible insights that boosted our production efficiency!", author: "Jane Smith, Engineer" },
  { text: "AI-driven defect detection saved us valuable time and resources!", author: "Michael Brown, Factory Supervisor" },
  { text: "Predictive analytics helped us reduce downtime by 30%!", author: "Sarah Johnson, Operations Manager" },
  { text: "Machine learning has transformed our quality control processes!", author: "David Wilson, Manufacturing Lead" },
  { text: "Automated anomaly detection is a game-changer for us!", author: "Emily Davis, Production Manager" }
];



const Home = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 4000); // Change testimonials every 4 seconds

    return () => clearInterval(interval);
  }, []);
    return (
        <>
            <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

            <div className="main-content" style={{ flex: "1" }}>

                    <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src="/images/ML_1.jpg" className="d-block w-100" alt="Slide 1" />
                            </div>

                            <div className="carousel-item">
                                <img src="images/ML_2.jpg" className="d-block w-100" alt="Slide 1" />
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
                

                 {/* Introduction Section */}
      <section className="text-center my-5" style={{ maxWidth: "900px", margin: "auto" }}>
        <h2>Welcome to Our Machine Learning Platform</h2>
        <p className="lead">
          Explore the power of AI-driven solutions in the mechanical industry.
          Unlock predictive maintenance, optimization tools, and advanced data analysis.
        </p>
      </section>

      {/* Features Section */}
      <h3 className="text-center mb-4">Key Features</h3>

      <section className="mb-5 mx-auto text-center" style={{ maxWidth: "1100px", display: "flex", justifyContent: "center" }}>

      <div className="row text-center">
        {[
          { title: "Predictive Maintenance", desc: "Reduce unexpected failures by leveraging AI-driven predictive maintenance strategies." },
          { title: "Optimization Tools", desc: "Improve operational efficiency with advanced machine learning-based optimization tools." },
          { title: "Data Analysis", desc: "Extract meaningful insights from real-time data analytics to drive better decisions." }
        ].map((feature, index) => (
          <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}> 
            <motion.div
              className="card p-3 shadow d-flex flex-column h-100" // Ensures equal height
              style={{ minHeight: "130px" }} // Prevents size mismatches
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h5>{feature.title}</h5>
              <p className="flex-grow-1">{feature.desc}</p> {/* Pushes content evenly */}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
          {/* Testimonials Section */}
          <h3 className="text-center mb-4">What Our Users Say</h3>

          <section className="mb-5 mx-auto text-center" style={{ maxWidth: "900px", display: "flex", justifyContent: "center" }}>
      <div className="row">
        <AnimatePresence mode="wait">
          {[index, index + 1].map((i) => (
            <motion.div 
              key={testimonials[i].author}
              className="col-md-6 d-flex justify-content-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card p-3 mb-3 shadow">
                <p>"{testimonials[i].text}"</p>
                <p><strong>- {testimonials[i].author}</strong></p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
      {/* Call to Action Section */}
      <section className="text-center"style={{ maxWidth: "900px", margin: "auto" }}>
        <h3>Get Started Today!</h3>
        <p>Join our platform and enhance your mechanical industry operations.</p>
        <button className="btn btn-primary me-2">Sign Up</button>
        <button className="btn btn-outline-secondary" onClick={() => navigate("/Features")}>
            Learn More
        </button>
      </section>
      </div>


      <footer className="bg-dark text-white text-center py-3 mt-5"
    style={{ marginTop: "auto", width: "100%" }}>

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
                                <p>Phone:+91 6121234561</p>
                            </div>
                            <div className="col-md-4">
                                <h5>Follow Us</h5>
                                <a href="https://www.facebook.com/login/" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                                <a href="https://x.com/i/flow/login" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-white"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <hr className="bg-light" />
                        <p className="mb-0">&copy; {new Date().getFullYear()} Machine Learning App. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;