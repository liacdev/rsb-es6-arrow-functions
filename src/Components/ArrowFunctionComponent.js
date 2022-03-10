import React from "react";

class ArrowFunctionComponent extends React.Component {
  handleClick = () => {
    console.log("Click happened");
  };

  render() {
    // This button will be rendered to handle the onClick activity
    return (
      <div>
        <div>
          <strong>
            <u>Section 2: This is a Class Component with an Arrow Function</u>
          </strong>
          return <button onClick={this.handleClick}>Click Me</button>
          <p>Arrow functions allow for shorter syntax</p>
          <p>Arrow functions have no binding of 'this'</p>
          <p>
            With Arrow functions, this always represents the object that defined
            the arrow function
          </p>
          <p>There is more for this lesson</p>
          <p>To be continued...</p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default ArrowFunctionComponent;
