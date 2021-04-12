import React from "react";


const onHeartChange = () => {
  this.setState({ heart: this.state.value });
}

class Box extends React.Component {



  render() {

    const slider = () => {
        if (this.props.unit !== "L") {
          return (<input type="range" min={this.props.stepsMin} max={this.props.stepsMax} value={this.props.value} oninput></input>)
        }
    };


    return (
      <div id="Box" className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}
        >{this.props.icon}</span>
        <p>{this.props.value} {this.props.unit}</p>
        {slider()}
      </div>
    );
  }

}


export default Box;
