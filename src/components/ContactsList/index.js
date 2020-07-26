import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { contactsList } from "../../RecoilState/cardsRecoilState";
import { currentContactState } from "../../RecoilState/cardsRecoilState";

const ContactList = () => {
  const [currentContact, setCurrentContact] = useRecoilState(
    currentContactState
  );
  const contacts = useRecoilValue(contactsList);

  return contacts.map((contact) => (
    <div
      key={contact.id}
      className={`${
        currentContact === contact.id ? "bg-gray-500 px-5 py-1 rounded-lg" : ""
      }`}
      onClick={() => setCurrentContact(contact.id)}
    >
      {contact.name}
    </div>
  ));
};

export default ContactList;
