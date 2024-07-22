import React, { Component } from 'react'

export class Life extends Component {
    componentDidMount(){
console.log("componentdidmount======>>>>>>>.")
alert("Updated------->>>>>>>")
    }
    componentDidUpdate(){
console.log("componentidUpdate============>>>>>>>>>.")
    }
    componentWillUnmount(){
console.log("componentwillunmount=========>>>>>>>.")
    }
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
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCounter}>increment</button>
        <button onClick={this.decrementCounter}>decrement</button>
      </div>

    )
  }
}

export default Life