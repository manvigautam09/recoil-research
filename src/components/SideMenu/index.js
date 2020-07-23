import React, { Suspense } from "react";
import ContactsList from "../ContactsList";

const SideMenu = () => {
  return (
    <div>
      <h2>Contacts Menu</h2>
      <div>
        <Suspense fallback={<h3>Loading Contacts...</h3>}>
          <ContactsList />
        </Suspense>
      </div>
    </div>
  );
};

export default SideMenu;
