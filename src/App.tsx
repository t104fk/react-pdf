import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navigation/>
    </div>
  );
}

export default App;
