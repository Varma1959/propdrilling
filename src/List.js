import React from "react";
import SinglePerson from "./SinglePerson";

const List = (props) => {
  const { people, RemoveItem } = props;

  return (
    <div>
      {people.map((person) => (
        <SinglePerson key={person.id} person={person} RemoveItem={RemoveItem} />
      ))}
    </div>
  );
};

export default List;
