import React from "react";
import './App.css';
import './styles/global.css'
import Counter from './components/Counter.jsx'

/* incrementCount = () => {
  this.setState({ count: this.state.count + 1 });
}
decrementCount = () => {
  this.setState({ count: this.state.count - 1 });
}
 */


class App extends React.Component {

/*   constructor() {
    super()
  
    this.state = {
        count: 0
    }
  }
  
 */    

  render() {
    return (
      <div>
        <h1>Counter</h1>

        {/*           <h2>{this.state.count}</h2>
          <button className="buttonincrement" onClick = {this.incrementCount}>+</button>
          <button className="buttondecrement" onClick = {this.decrementCount}>-</button>
        */}
        
        <Counter/>

      </div>
    );
  }
}

export default App;
