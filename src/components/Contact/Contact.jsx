import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ data }) {
    const dispatch = useDispatch();
  return (
    <div className={css.user}>
        <div className={css.info}>
            <p>
                <FaUser />
                {data.name}
            </p>
            <p>
                <FaPhoneAlt />
                {data.number}
            </p>
        </div>
        <button className={css.btn_delete}
              onClick={() => dispatch(deleteContact(data.id))}>
              Delete
        </button>
    </div>
  );
}