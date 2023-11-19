import React, { useState } from "react";
import contacts from "../data/data";
import Card from "./Card";

function Directory(props) {
  function mapContacts(cardsToMap) {
    return cardsToMap.map((contact) => (
      <Card
        name={contact.name}
        img={contact.picture}
        phone={contact.phone}
      />
    ));
  }
  const [filterString, setFilterString] = useState("");
  var filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterString.toLowerCase());
  });

  var cards =
    filteredContacts.length > 0
      ? mapContacts(filteredContacts)
      : mapContacts(contacts);

  function filterListener(event) {
    console.log(event.target.value);
    setFilterString(event.target.value);
    console.log("Filter: " + filterString);
  }

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Search'
          onChange={filterListener}
          value={filterString}
        />
      </div>
      {cards}
    </div>
  );
}

export default Directory;
