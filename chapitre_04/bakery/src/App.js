import React from "react";
import './App.css';
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/Button";



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  selectAdd() {
    this.setState({
      activeTab: "add"
    })
  }

  selectList() {
    this.setState({
      activeTab: "list"
    })
  }

  selectPay() {
    this.setState({
      activeTab: "pay"
    })
  }

  addItem(name, price) {
    const item = { "name": name, "price": parseInt(price) }
    this.setState({
      items: [...this.state.items, item]
    })
    console.log(this.state.items);
  }

  Conditionrender() {

    if (this.state.activeTab === "add") {

      return <Add addingItem={this.addItem} />

    }
    else if (this.state.activeTab === "list") {
      return <List listItems={this.state.items} />

    }
    else if (this.state.activeTab === "pay") {
      return <Pay  Items={this.state.items}/>

    }

  }


  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <ul className="header">
          <li><Button  isselected={this.state.activeTab === "add" }
            onClick={this.selectAdd}> Add </Button></li>
          <li><Button   isselected={this.state.activeTab === "list" }
            onClick={this.selectList}> List </Button></li>
          <li><Button   isselected={this.state.activeTab === "pay" }
            onClick={this.selectPay}> Pay </Button></li>
        </ul>
        <div className="content">
          {this.Conditionrender()}
        </div>
      </div>
    );
  }
}

export default App;
