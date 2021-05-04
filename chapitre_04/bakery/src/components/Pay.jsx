import React from "react";
import Card from "./Card";





class Pay extends React.Component {

  constructor() {
    super()
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0
    }
  }

  handleSelect(name, price) {
    console.log(this.props.name, this.props.price);

    const newItemBasket = {
      name: name,
      price: price
    }

    const newBasket = [...this.state.basket, newItemBasket]

    let total =0
    for (let i = 0; i < newItemBasket.length; i++) {
      const element = basket[i];
      total += element.price
    }
    console.log("total", total);
  }

  render() {
    console.log("props de pay", this.props);


    const pay = this.props.Items.map((item) =>
      <li>
        <Card productName={item.name} price={item.price} onClick={this.handleSelect} />
      </li>
    )
    return (
      <div>
        <div>
          <p>Total : {this.state.total}€</p>
        </div>
        <div>
          <ul>
            {pay}
          </ul>
        </div>
      </div>);
  }


}

export default Pay;
