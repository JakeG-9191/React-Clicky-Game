import React from 'react';
// import logo from './logo.svg';
import Wrapper from "./components/wrapper"
import ImageCards from "./components/imageCards";
import images from "./images.json";
import './App.css';

class App extends React.Component {

  state = {
    images,
    count: 0
  };

  userScore = () => {
    this.setState({ count: this.state.count + 1 });
  };

  userReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Clicky Game - React</h1>
        <h2 className="userScore">Your Score: {this.state.count}</h2>
        {this.state.images.map(gamePlay => (
        <ImageCards
          key={gamePlay.id}
          id={gamePlay.id}
          name={gamePlay.name}
          image={gamePlay.image}
          occupation={gamePlay.occupation}
          location={gamePlay.location}
        />
        ))}
      </Wrapper>
    )
  }
};

export default App;

// handleIncrement = () => {
//   this.setState({ count: this.state.count + 1 });
// };

// render() {
//   return (
//     <div className="card text-center">
//       <div className="card-header bg-primary text-white">
//         Click Counter!
//       </div>
//       <div className="card-body">
//         <p className="card-text">Click Count: {this.state.count}</p>
//         <button className="btn btn-primary" onClick={this.handleIncrement}>
//           Increment
//         </button>
//       </div>
//     </div>
//   );
// }
