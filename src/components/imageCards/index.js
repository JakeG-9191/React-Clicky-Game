import React from "react";
import "./style.css";

function ImageCards(props) {

  return (
    <div className="card" onClick={() => props.scoreCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <span>Click Me!</span>
      </div>
    </div>
  )
};

export default ImageCards;
