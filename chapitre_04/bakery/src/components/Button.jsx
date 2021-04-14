import React from "react";





class Button extends React.Component {

  render() {
    return (
      <section>
        <h1>Button</h1>
        <button isSelected={this.props.isSelected} onClick={this.props.newRender}></button>
      </section>
    );
  }
}

export default Button;
