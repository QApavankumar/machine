import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs= () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email format";
    if (!formData.message) errors.message = "Message is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

    return (
        <>
            <div className="container mt-5">
      {/* Contact Form */}
      <section className="mb-5">
        <h2 className="text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="mb-5 text-center">
        <h3>Contact Information</h3>
        <p>Email: contact@mlmechanical.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 AI Street, Tech City, TX 75001</p>
      </section>

      {/* Map Section */}
      <section className="text-center">
        <h3>Find Us</h3>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093626!2d144.95565131531812!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f8e61b7f%3A0x5087a76b17a5777!2sTech%20City!5e0!3m2!1sen!2sus!4v1638246214089!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>

        </>
    );
};

export default ContactUs;