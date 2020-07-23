import React, { Suspense } from "react";
import ContactsList from "../ContactsList";

const SideMenu = () => {
  return (
    <div className="h-full  bg-gray-400 flex flex-col items-center">
      <div>Contacts Menu</div>
      <div className="flex flex-col flex-grow  w-full justify-center items-center">
        <Suspense fallback={<h3>Loading Contacts...</h3>}>
          <ContactsList />
        </Suspense>
      </div>
    </div>
  );
};

export default SideMenu;
