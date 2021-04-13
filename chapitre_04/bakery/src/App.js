import React from "react";
import './App.css';
import './styles/global.css'
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";




class App extends React.Component {



  renderNavigation() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/add">Add</a>
          </li>
          <li>
            <a href="/list">List</a>
          </li>
          <li>
            <a href="/pay">Pay</a>
          </li>
        </ul>
      </nav>
    );
  }

  renderContent() {
    return (
      <section>
        <h1>Bakery</h1>
      </section>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderNavigation()}
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default App;
