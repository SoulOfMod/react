import React from "react";
import Card from "./Card";





class Pay extends React.Component {

  constructor() {
    super()
    this.state = {
      basket : [],
      total : 0,
      totalTVA : 0,
      totalEcoTax  : 0,
      totalTTC  : 0
    }
  }

  handleSelect(name, price) {
    console.log(this.props.name, this.props.price);
  }

  render() {
    console.log("props de pay",this.props);
    
    
    const pay = this.props.items.map((item) =>
    <li>
      <Card productName = {item.name} price = {item.price} onClick = {this.handleSelect}/>
    </li>
    )
    return (
      <div>
        <ul>
        {pay}
      </ul>
      </div>
    );
    }
  
  
  }

export default Pay;
