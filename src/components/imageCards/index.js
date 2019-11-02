import React from "react";
import "./style.css";

class ImageCards extends React.Component {

  state = {
    count: 0
  };

  userScore = () => {
    this.setState({ count: this.state.count + 1 });
  };

  userReset = () => {
    this.setState({ count: 0 });
  };

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <strong>Click Me!</strong>
            <button className="btn btn-primary" onClick={this.userScore}>Test</button>
      </div>
    </div>
  )
};

export default ImageCards;