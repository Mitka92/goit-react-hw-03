import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contact}>
      <span className={css.info}>
        <span className={css.name}>{name}</span>
        <span className={css.number}>{number}</span>
      </span>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
