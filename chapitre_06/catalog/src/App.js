import React from "react";
import './App.css';
import Movie from "./components/Movie.json";
import Card from "./components/Card.json";


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      id: 0,
      title: "",
      director: "",
      stars: [],
      image: "",
      description: "",
    }
  }

  render() {
    return (

      
      movie.map((movie) => {
        <div>
          <h1>Movies</h1>
          <Card id={this.state.id} title={this.state.title} director={this.state.director} stars={this.state.stars} image={this.state.image} description={this.state.description} />
        </div>

      })
    );
  }
}

export default App;
