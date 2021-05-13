import React, { Component } from "react";

export class counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }
  incrememt() {
    // this.setState({
    //     counter:this.state.counter+1
    // },
    // ()=> {console.log(this.state.count)})
    this.setState((prevVal) => {
      counter: prevVal = count + 1;
    });
  }
  incFive() {
    this.incrememt();
    this.incrememt();
    this.incrememt();
  }

  render() {
    return (
      <div>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={() => this.incFive()}></button>
      </div>
    );
  }
}

export default counter;
