import React from "react";





class List extends React.Component {

  render() {
    return (
      <div>
        <h1>List</h1>
        <ul>
          {this.props.listItems.map(curr => {
            return (
              <li>
                <p>Nom du produit:  {curr.name}</p>
                <p>Prix:  {curr.price}€</p>
              </li>)
          })}
        </ul>
      </div>
    )
  }
}
export default List;