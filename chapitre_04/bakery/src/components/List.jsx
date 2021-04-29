import React from "react";





class List extends React.Component {

  render() {
    return (
      <div>
        <h1>List</h1>
        <ul className="list-group">
          {this.props.listItems.map(curr => {
            return (<li>{curr.name} - {curr.price} </li>)
          })}
        </ul>
      </div>
    )
  }
}
export default List;