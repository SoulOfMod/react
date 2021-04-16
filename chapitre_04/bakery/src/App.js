import React from "react";
import './App.css';
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add";



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: {}
    }
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickList = this.onClickList.bind(this)
    this.onClickPay = this.onClickPay.bind(this)
  }

  onClickAdd() {
    this.setState({
      activeTab: "add"
    })
  }

  onClickList() {
    this.setState({
      activeTab: "list"
    })
  }

  onClickPay() {
    this.setState({
      activeTab: "pay"
    })
  }


  Addrender(){

    <Add></Add>
  }

  Listrender(){

    <List></List>
  }

  Payrender(){

    <Pay></Pay>
  }

  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <ul className="header">
          <li><button className={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.onClickAdd(this.Addrender)}> Add </button></li>
          <li><button className={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.onClickList(this.Listrender)}> List </button></li>
          <li><button className={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.onClickPay(this.Payrender)}> Pay </button></li>
        </ul>
        <div className="content">

        </div>
      </div>
    );
  }
}

export default App;
