import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('İsim gerekli'),
  phone: Yup.string().required('Telefon numarası gerekli'),
});

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const isExist = contacts.find(
        (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (isExist) {
        alert(`${values.name} zaten rehberde mevcut!`);
        return;
      }

      await dispatch(addContact(values)).unwrap();
      resetForm();
    } catch (error) {
      console.error('Kişi eklenirken hata:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <Field
              type="text"
              name="name"
              placeholder="İsim"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <Field
              type="tel"
              name="phone"
              placeholder="Telefon"
              className={styles.input}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={styles.error}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Ekleniyor...' : 'Ekle'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactsForm;
