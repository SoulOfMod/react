import React from "react";
import './App.css';
import './styles/global.css'
import './List'
import './Add'
import './Pay'




class App extends React.Component {

  constructor() {
    super()

  }


  render() {
      return (
        <div>
          <h1>Bakery</h1>
          <ul className="header">
            <li><a href="/add">Add</a></li>
            <li><a href="/list">List</a></li>
            <li><a href="/pay">Pay</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}

export default App;
