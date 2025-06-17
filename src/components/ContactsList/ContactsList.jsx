import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteContact(id)).unwrap();
    } catch (error) {
      console.error('Kişi silinirken hata:', error);
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Yükleniyor...</div>;
  }

  if (contacts.length === 0) {
    return <div className={styles.empty}>Kayıtlı kişi bulunamadı</div>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <span className={styles.text}>
            {name}: {phone}
          </span>
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => handleDelete(id)}
            aria-label="Kişiyi sil"
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
