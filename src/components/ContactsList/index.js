import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { contactsList } from "../../RecoilState/cardsRecoilState";
import { currentContactState } from "../../RecoilState/cardsRecoilState";

const ContactList = () => {
  const setCurrentContact = useSetRecoilState(currentContactState);
  const contacts = useRecoilValue(contactsList);

  return contacts.map((contact) => (
    <div key={contact.id} onClick={() => setCurrentContact(contact.id)}>
      {contact.name}
    </div>
  ));
};

export default ContactList;
