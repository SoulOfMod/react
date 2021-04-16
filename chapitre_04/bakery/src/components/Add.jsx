import React from "react";





class Add extends React.Component {

  constructor() {
    super()
    this.state = {
      productName: "",
      price: 1
    }
    this.updatePrice = this.updatePrice.bind(this)
    this.updateProductName = this.updateProductName.bind(this)
  }

  updatePrice(event) {
    this.setState({
      price: event.target.value
    })
    console.log(this.state.price);
  }

  updateProductName(elem) {
    this.setState({
      productName: elem.target.value
    })
  }

  render() {
    return (
      <section>
        <h1>Add</h1>
        <div><input type="text" name="enter product" onChange={this.updateProductName} />

          <button type="button" className="btn btn-primary" onClick={() => this.props.addingItem(this.state.productName, this.state.price)}>Add</button>
        </div>
        <div><input type="range" min={1} max={10} value={this.state.price} onChange={this.updatePrice}></input>
          <p>{this.state.price}</p>
        </div></section>
    );
  }

}

export default Add;
