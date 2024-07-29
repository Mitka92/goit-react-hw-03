import './App.css';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <div className="phone-book">
        <h1 className="title">
          <span className="span">P</span>honebook
        </h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </Section>
  );
}

export default App;
