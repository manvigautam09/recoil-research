import React from "react";
import "./style.css";
import Details from "../../components/Details";
import SideMenu from "../../components/SideMenu";

const Cards = () => {
  return (
    <div className="card-layout">
      <SideMenu />
      <Details />
    </div>
  );
};

export default Cards;
