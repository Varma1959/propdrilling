import React from "react";

const SinglePerson = (props) => {
  const { person, RemoveItem } = props;
  const {id} = person;

  return (
    <div>
      <h1>{person.name}</h1>
      <button onClick={() => RemoveItem(id)}>Delete</button>
    </div>
  );
};

export default SinglePerson;
