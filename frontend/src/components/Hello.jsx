import "./style.css";
import React from "react";

const Hello = ({ firstname }) => {
  return (
    <div>
      <h1 className="hello-user">
        Bonjour <span className="firstname">{firstname}</span>
      </h1>
      <p className="motivation-message">
        Félicitation ! Vous avez explosé vos objectifs hier
        <span role="img" aria-label="Applaudissements">
          👏
        </span>
      </p>
    </div>
  );
};

export default Hello;
