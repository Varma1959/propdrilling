import React, { useState } from "react";
import "./App.css";
import data from "./Data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const RemoveItem = (id) => {
    const filteredPeople = (people) => {
      return people.filter((person) => person.id !== id);
    };
    setPeople(filteredPeople);
  };

  console.log(people);

  return (
    <div className="App">
      <h1> Multiple Component</h1>
      <List people={people} RemoveItem={RemoveItem} />
    </div>
  );
}

export default App;
