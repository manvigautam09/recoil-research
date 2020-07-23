import React from "react";
import { useRecoilValue } from "recoil";

import { currentContactDetails } from "../../RecoilState/cardsRecoilState";

const Card = () => {
  const contact = useRecoilValue(currentContactDetails);
  return (
    <>
      <h3>{contact.name}</h3>
      <span>ADDRESS : {contact.address}</span>
      <span>PHONE : {contact.phone}</span>
      <span>EMAIL : {contact.email}</span>
    </>
  );
};

export default Card;
