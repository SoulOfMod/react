import React from "react";





class Pay extends React.Component {

  constructor() {
    super()
    this.state = {
      basket =[],
      total = 0,
      totalTVA = 0,
      totalEcoTax  = 0,
      totalTTC  = 0
    }
  }

  handleSelect (name,price) {
  console.log(this.props.name,this.props.price);  
  }

  render() {
    return (
      <section>
        <h1>Pay</h1>
        <h2>No item available</h2>
        <p>{this.state.total}</p>
      </section>
    );
  }
}

export default Pay;
