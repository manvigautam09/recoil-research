import { atom, selector } from "recoil";
import { getContacts, getDetails } from "../utils/data";

export const currentContactState = atom({
  key: "currentContactState",
  default: 1,
});

export const contactsList = selector({
  key: "contactList",
  get: async ({ get }) => {
    const response = await getContacts();
    return response;
  },
});

export const currentContactDetails = selector({
  key: "currentContactDetails",
  get: async ({ get }) => {
    const response = await getDetails(get(currentContactState));
    return response;
  },
});
