import React from "react";
import Details from "../../components/Details";
import SideMenu from "../../components/SideMenu";

const Cards = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/4">
        <SideMenu />
      </div>
      <div className="w-3/4 h-full bg-gray-600 flex flex-col items-center justify-center">
        <Details />
      </div>
    </div>
  );
};

export default Cards;
