import React from "react";





class Card extends React.Component {

  constructor() {
    super()
    this.state = {
      image: "../../public/image/item.png"
    }
  }

  render() {


    <button onClick={() => { this.props.onClick(this.props.productName, this.props.price) }}>
        <img src = {this.state.image}></img>
    </button>

    return (
        <div>
            <p>{this.props.productName}</p>
            <p>{this.props.price}</p>
            <p>{this.props.onClick}</p>
        </div>
    )
}
}

export default Card;
