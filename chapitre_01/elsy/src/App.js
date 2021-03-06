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
    }
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)
  }

  onHeartChange(event) {
    this.setState({
      heart: event.target.value
    })
    this.calculateWater()
    console.log(this.state.heart);
  }
  onStepsChange(event) {
    this.setState({
      steps: event.target.value
    })
    this.calculateWater()
    console.log(this.state.steps);
  }
  onTempChange(event) {
    this.setState({
      temperature: event.target.value
    })
    this.calculateWater()
    console.log(this.state.temperature);
  }
  
  calculateWater() {
    let tempAdd =0;
    let heartAdd =0;
    let stepsAdd = 0;
    if (this.state.temperature > 20) {
      tempAdd = 0.02 * (this.state.temperature - 20)
      console.log(tempAdd);
    }
    if (this.state.heart > 120) {
      heartAdd = 0.0008 * (this.state.heart - 120)
      console.log(heartAdd);
    }
    if (this.state.steps > 10000) {
      stepsAdd = 0.00002 * (this.state.steps - 10000)
      console.log(stepsAdd);
    }
    let total = tempAdd + heartAdd + stepsAdd;
    this.setState({ water: (1.5 + total ).toFixed(2)})
  
  }

  // calculateWater(event) {
  //   if (this.state.temperature >= 20) {
  //     for (let i = 20; i < this.state.temperature.length; i++) {
  //       this.setState({
  //         water: event.state.water + 0.02
  //       })
  //     }
  //   }
  //   else if (this.state.heart >= 120) {
  //     for (let i = 120; i < this.state.heart.length; i++) {
  //       this.setState({
  //         water: event.state.water + 0.0008
  //       })
  //     }
  //   }
  //   else if (this.state.steps >= 10000) {
  //     for (let i = 10000; i < this.state.steps.length; i++) {
  //       this.setState({
  //         water: event.state.water + 0.00002
  //       })
  //     }
  //   }
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          < Box color="#3A85FF" icon="local_drink" value={this.state.water} unit="L" />
          {/* Steps */}
          < Box color="black" icon="directions_walk" min={stepsMin} max={stepsMax} value={this.state.steps} unit="steps" onChangeSlider={this.onStepsChange} />
          {/* Heart */}
          < Box color="red" icon="favorite" min={heartMin} max={heartMax} value={this.state.heart} unit="bpm" onChangeSlider={this.onHeartChange} />
          {/* Sun */}
          < Box color="yellow" icon="wb_sunny" min={tempMin} max={tempMax} value={this.state.temperature} unit="C??" onChangeSlider={this.onTempChange} />
          <p>Heart  : {heartMin}</p>
          <p>Temperature   : {tempMin}</p>
          <p>Steps  : {stepsMin}</p>
        </div>
      </div>

    );
  }
}

export default App;
