import React from "react";
import './App.css';
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: {}
    }
  }


  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <ul className="header">
          <li><button className="buttonheader">Add</button></li>
          <li><button className="buttonheader">List</button></li>
          <li><button className="buttonheader">Pay</button></li>
        </ul>
        <div className="content">

        </div>
      </div>
    );
  }
}

export default App;
