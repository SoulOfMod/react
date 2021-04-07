import React from "react";
import './App.css';


const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <p>Temperature minimal : {tempMin}</p>
          <p>Temperature maximal : {tempMax}</p>
          <p>Battement minute minimal : {heartMin}</p>
          <p>Battement minute maximal : {heartMax}</p>
          <p>Nombre de Pas minimal : {stepsMin}</p>
          <p>Nombre de Pas maximal : {stepsMax}</p>
        </div>
      </div>
    );
  }
}

export default App;