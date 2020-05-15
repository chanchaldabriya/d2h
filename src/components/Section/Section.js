import React from "react";
import "./Section.css";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="Section">
      <div className="Section-inner">
        <div className="Section-header">
          {title && <span className="Section-title">{title}</span>}
          {subtitle && <span className="Section-subtitle">{subtitle}</span>}
        </div>
        <hr />
        {children}
      </div>
    </section>
  );
};

export default Section;
