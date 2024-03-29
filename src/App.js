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
    // ('#myModal').modal('toggle')
    alert(`Game Over \nScore: ${this.state.score}`)
    this.setState({ score: 0 })
    return
  }

  scoreCount = (id) => {
    this.state.images.find((x, i) => {
      if (x.id === id) {
        if (images[i].count === 0) {
          images[i].count = images[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () { console.log(this.state.score) });
          this.state.images.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.endGame()
        }
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">React Clicky Game - Best Shows Ever Edition</h1>
        <Head>
          <h3>Current Score: {this.state.score}</h3>
          <h3>High Score: {this.state.highscore}</h3>
        </Head>
        {this.state.images.map(gamePlay => (
          <ImageCards
            scoreCount={this.scoreCount}
            id={gamePlay.id}
            key={gamePlay.id}
            image={gamePlay.image}
          />
        ))}
        <div>
          <div class="myModal modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
      </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
};

export default App;
