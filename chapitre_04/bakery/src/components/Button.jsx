import React from "react";





class Button extends React.Component {

  render() {
    return (
      <section>
        <h1>Button</h1>
        <button className={this.props.isSelected} onClick={this.props.onClick}>

          {this.props.children}

        </button>

      </section>
    );
  }
}

export default Button;
