import './App.css';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import data from './db.json';

function App() {
  return (
    <Section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Section>
  );
}

export default App;
