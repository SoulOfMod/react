import React from "react";
import './App.css';
import Box from './components/Box.jsx'
import './styles/global.css'





class App extends React.Component {

 

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
          < Box color="yellow" icon="wb_sunny" min={tempMin} max={tempMax} value={this.state.temperature} unit="C°" onChangeSlider={this.onTempChange} />
          <p>Heart  : {heartMin}</p>
          <p>Temperature   : {tempMin}</p>
          <p>Steps  : {stepsMin}</p>
        </div>
      </div>

    );
  }
}

export default App;
