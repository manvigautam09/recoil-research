const contacts = [
  {
    id: 1,
    name: "Kathy Green",
    address: "42nd Street, Central Place",
    phone: "1111111111",
    email: "kathy@green.com",
  },
  {
    id: 2,
    name: "Mark Jackson",
    address: "Greenland, Perk Country",
    phone: "2222222222",
    email: "mark@Jackson.com",
  },
  {
    id: 3,
    name: "Josphine Vellany",
    address: "21st street, Fake City",
    phone: "3333333333",
    email: "josh@iko.com",
  },
];

export const getContacts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        contacts.map((contact) => ({ id: contact.id, name: contact.name }))
      );
    }, 3000);
  });

export const getDetails = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts.filter((contact) => contact.id === id)[0]);
    }, 2000);
  });
