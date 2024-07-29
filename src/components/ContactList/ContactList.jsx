import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <div className={css['contacts-list']}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
