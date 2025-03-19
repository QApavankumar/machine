import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
const ContactUs= () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
    
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!emailPattern.test(formData.email)) errors.email = "Invalid email format";
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
        <form onSubmit={handleSubmit} className="contact-form mx-auto">

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
    type="text" 
    name="name" 
    className="form-control" 
    value={formData.name} 
    onChange={handleChange} 
    pattern="[A-Za-z ]+" 
    onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/g, '')} 
    required 
/>

            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
    type="email" 
    name="email" 
    className="form-control" 
    value={formData.email} 
    onChange={handleChange} 
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}" 
    title="Please enter a valid email address" 
    required 
/>
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
      <section className="text-center mb-5">
        <h3 className="text-center mb-3">Find Us</h3>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23804.248302873217!2d78.57438719999999!3d17.3309952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1742377931780!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23804.248302873217!2d78.57438719999999!3d17.3309952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1742377931780!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </section>
    </div>

        </>
    );
};

export default ContactUs;