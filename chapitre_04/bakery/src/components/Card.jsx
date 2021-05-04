import React from "react";





class Card extends React.Component {

  constructor() {
    super()
    this.state = {
      image: "../../public/image/item.png"
    }
  }

  render() {


    <button onClick={() => this.props.onClick(this.props.productName, this.props.price) }>
        <img src = {this.state.image} alt="item"></img>
    </button>

    return (
        <div>
            <p>Nom du produit:  {this.props.productName}</p>
            <p>Prix:  {this.props.price}€</p>
        </div>
    )
}
}

export default Card;
