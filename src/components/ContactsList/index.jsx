/**
 * Kişi Listesi Bileşeni
 *
 * Bu bileşen, kayıtlı kişilerin listesini gösterir.
 * Filtrelenmiş kişi listesini render eder ve silme işlemlerini yönetir.
 *
 * Özellikler:
 * - Filtrelenmiş kişi listesi gösterimi
 * - Kişi silme fonksiyonu
 * - İsim ve numara görüntüleme
 */

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <span className={styles.text}>
            {name}: {phone}
          </span>
          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
