import React, { Component } from 'react'

export class Counter extends Component {
    constructor()
    {
        super();
        this.state = {
            count :0
        }
    }
    incrementCounter = () =>
    {
        this.setState({count:this.state.count+1})
    };

decrementCounter = () => {
    this.setState({count:this.state.count-1})
};
  render() {
    return (
      <div>
        <h1>Add: {this.state.count}</h1>
        <button onClick={this.incrementCounter}>increment</button>
        <button onClick={this.decrementCounter}>decrement</button>
      </div>
    );
  }
}

export default Counter