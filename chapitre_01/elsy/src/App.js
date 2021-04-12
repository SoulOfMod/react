import React from "react";
import './App.css';
import Box from './components/Box.jsx'
import './styles/global.css'
const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
      value: 0
    }
  }

  onHeartChange = () => {
    this.setState({ heart: this.state.value });
  }
  


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          < Box color="#3A85FF" icon="local_drink" value={1.5} unit="L" />
          {/* Steps */}
          < Box color="black" icon="directions_walk" value={3000} unit="steps" />
          {/* Heart */}
          < Box color="red" icon="favorite" value={120} unit="bpm" />
          {/* Sun */}
          < Box color="yellow" icon="wb_sunny" value={-10} unit="C°" />
          <p>Heart  : {heartMin}</p>
          <p>Temperature   : {tempMin}</p>
          <p>Steps  : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
