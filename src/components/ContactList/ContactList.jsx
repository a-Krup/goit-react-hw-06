import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
