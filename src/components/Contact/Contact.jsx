import css from './Contact.module.css';
import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contact}>
      <span className={css.info}>
        <span className={css.name}>
          <IconContext.Provider
            value={{ color: 'blue', className: [css.icon] }}
          >
            <IoIosContact />
          </IconContext.Provider>
          {name}
        </span>
        <span className={css.number}>
          <IconContext.Provider
            value={{ color: 'blue', className: [css.icon] }}
          >
            <FaPhone />
          </IconContext.Provider>
          {number}
        </span>
      </span>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
