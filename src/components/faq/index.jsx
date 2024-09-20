import { useState } from "react";
import "./faq.css";

import { FAQS } from "../../utils/constants";

export const FaqAccordion = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {title}
      <div className="faq-accordion">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
