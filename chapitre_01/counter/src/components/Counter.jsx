import React from 'react'

class Counter extends React.Component {


    constructor() {
        super()

        this.state = {
            count: 0
        }
    }


    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount = () => {
    if(this.state.count) {
        this.setState({
          count: this.state.count - 1,
          message: null
        });
      } else {
        this.setState({
          message: "Can't decrement. Since 0 is the min value"
        });
      }}

    render() {

        return (
            <div className="box">
                <h2>{this.state.count}</h2>
                <button className="buttonincrement" onClick={this.incrementCount}>+</button>
                <button className="buttondecrement" onClick={this.decrementCount}>-</button>
            </div>
        )
    }

}

export default Counter