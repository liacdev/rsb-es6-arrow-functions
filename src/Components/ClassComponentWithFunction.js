import React from "react";

class ClassComponentWithFunction extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Click happened");
  }
  render() {
    // This button will be rendered to handle the onClick activity
    return (
      <div>
        <strong>
          <u>
            Section 1: This is a Class Component with a Function Declaration
          </u>
        </strong>
        <p>- This button handles the handleClick() function defined above</p>
        <button onClick={this.handleClick}>Click Me</button>
        <p>- onClick is not an arrow function</p>
        <p>- In this case onClick is a regular function</p>
        <p>- We will get to those later</p>
        <p>- This demonstrates how things were done before arrow functions</p>
      </div>
    );
  }
}

export default ClassComponentWithFunction;
