import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css['contacts-list']}>
      <h2 className={css.title}>Contacts</h2>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
          id={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactList;
