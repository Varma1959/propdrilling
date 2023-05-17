import React, { useState } from "react";
import "./App.css";
import data from "./Data";

function App() {
  const [showData, setShowData] = useState(data);
  const RemoveItem = (id) => {
    setShowData(() => {
      return showData.filter((person) => person.id !== id);
    });
  };
  return (
    <div className="App">
      <h1> Single Component</h1>
      {showData.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => RemoveItem(id)}>remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
