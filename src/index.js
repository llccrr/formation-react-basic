import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
