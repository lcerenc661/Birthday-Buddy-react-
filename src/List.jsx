import React from "react";
import Person from "./Person";

const PeopleList = ({people}) => {
  return (
    <section>
      {people.map((person) => (
        <Person person={person} key={person.id} />
      ))}
    </section>
  );
};

export default PeopleList;
