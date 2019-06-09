//imports dependencies and files
import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import CardIsland from "./components/CardIsland";
import Footer from "./components/Footer";
import island from "./island.json";
import "./App.css";

class App extends Component {
  state = {
    island,
    clickedImages: [],
    score: 0,
    highScore: 0
  };

  // Randomize the array of images
  returnRandomArray = arr => {
    let counter = arr.length;
    let temp;
    let index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }

  // Handle the image clicks
  imageClick = event => {
    const currentImage = event.target.getAttribute("dataid");
    const imageWasClicked = this.state.clickedImages.indexOf(currentImage) > -1;

    // Was the image already clicked by the user?
    if (imageWasClicked) {
      this.setState({
        island: this.returnRandomArray(island),
        clickedImages: [],
        score: 0
      });
      alert("You lose!");

    } else {
      this.setState(
        {
          island: this.returnRandomArray(island),
          clickedImages: this.state.clickedImages.concat(currentImage),
          score: this.state.score + 1,
          highScore: (this.state.score >= this.state.highScore ? this.state.score+1 : this.state.highScore)
        },

        () => {
          if (this.state.score === this.state.island.length) {
            alert("You Win!");
            this.setState({
              island: this.returnRandomArray(island),
              clickedImages: [],
              score: 0
            });
          }
        }
      );
    }
  };

  // Render the components of the application
  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <div className="wrapper">
          {this.state.island.map(island => (
            <CardIsland
              imageClick={this.imageClick}
              id={island.id}
              key={island.id}
              dataid={island.image}
              image={island.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

// Export the App class
export default App;