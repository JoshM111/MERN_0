import React, { useState } from "react";
import './App.css';
import BoxForm from './components/BoxForm.js';
import DisplayForm from "./components/DisplayForm.js";

function App() {
  const [box, setBox] = useState({
    colors: [],
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4 my-3">Box Generator</h1>
        <BoxForm setBox={setBox} box={box} />
        <div className="row">
          {box.colors.map((color) => (
            <DisplayForm color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
