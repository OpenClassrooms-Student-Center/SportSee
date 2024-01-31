import "./style.css";
import React from "react";

const NutritionalAnalysis = ({ image, label, value }) => {
  return (
    <div className="nutritional-panel">
      <img
        src={require(`../images/${image}`)}
        alt="Icone du macronutriment"
        className="macro-icon"
      />
      <div className="nutritional-data">
        <h2 className="nutritional-value"> {value} </h2>
        <p className="nutritional-label"> {label}</p>
      </div>
    </div>
  );
};

export default NutritionalAnalysis;
