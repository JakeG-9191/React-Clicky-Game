import React from 'react';
import ImageCards from "./components/imageCards";
import Wrapper from "./components/wrapper";
import Head from "./components/header"
import images from "./images.json";
import './App.css';

class App extends React.Component {

  state = {
    images,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score })
    }
    this.state.images.forEach(point => {
      point.count = 0;
    });
    alert("Game Over \nScore: ${this.state.score}")
    this.setState({ score: 0 })
    return
  }

  scoreCount = (id) => {
    this.state.images.find((x, i) => {
      if (x.id === id) {
        if (images[i].count === 0) {
          images[i].count = images[i].count + 1;
          this.setState({ score: this.state.score + 1 })
          this.state.images.sort(() => Math.random() + 1)
          return
        } else {
          this.endGame()
        }
      }
    })}

    render() {
      return (
        <Wrapper>
          <h1 className="title">Clicky Game - React</h1>
          <Head>
            Current Score: {this.state.score}
            High Score: {this.state.highscore}
          </Head>
          {this.state.images.map(gamePlay => (
            <ImageCards
              scoreCount={this.scoreCount}
              key={gamePlay.id}
              id={gamePlay.id}
              // name={gamePlay.name}
              image={gamePlay.image}
            // occupation={gamePlay.occupation}
            // location={gamePlay.location}
            />
          ))}
        </Wrapper>
      )
    }
  };

  export default App;
