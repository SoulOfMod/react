import React from "react";
import '../styles/global.css';





class Button extends React.Component {

  render() {
    return (
      <div>
        <button className="buttonButton" onClick={this.props.onClick}>

          {this.props.children}

        </button>
      </div>
    );
  }
}

export default Button;
