import React from "react";





class Button extends React.Component {

  render() {
    return (
        <button
            onClick={this.props.onClick} 
            className={this.props.isselected === true?  "btn btn-primary" : "btn btn-light"}
            type="button">
                {this.props.children}
        </button>
    )
}
}

export default Button;
