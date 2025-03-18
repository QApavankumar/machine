import React from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {
    const navigate = useNavigate();
    const faqs = [
        { question: "What is machine learning in the mechanical industry?", answer: "Machine learning in the mechanical industry helps optimize processes, predict maintenance needs, and improve efficiency." },
        { question: "How does predictive maintenance work?", answer: "Predictive maintenance uses AI and data analytics to foresee equipment failures before they happen, reducing downtime." },
        { question: "What optimization tools are available?", answer: "AI-powered optimization tools enhance manufacturing efficiency by streamlining workflows and reducing waste." },
        { question: "How can data analysis benefit mechanical processes?", answer: "Data analysis helps industries make informed decisions, detect anomalies, and improve performance." }
      ];
    
    return (
        <>
           <div className="container mt-5">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <p className="text-center lead">Find answers to the most commonly asked questions about machine learning in the mechanical industry.</p>
      
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button 
                className="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#collapse${index}`} 
                aria-expanded={index === 0 ? "true" : "false"} 
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div 
              id={`collapse${index}`} 
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} 
              aria-labelledby={`heading${index}`} 
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        </>
    );
};

export default Faq;