import React from 'react';
import ContactsForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';

function ContactsPage () {
  return (
    <>
      <h2>Contacts</h2>
      <ContactsForm />
      <ContactsList />
    </>
  );
}

export default ContactsPage;
