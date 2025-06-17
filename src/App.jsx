/**
 * Telefon Rehberi Uygulaması
 *
 * Bu uygulama, kullanıcıların kişileri ekleyip silebileceği ve arayabileceği
 * basit bir telefon rehberi uygulamasıdır.
 *
 * Özellikler:
 * - Kişi ekleme (isim ve numara)
 * - Kişi silme
 * - Kişi arama
 * - Veriler local storage'da saklanır (Redux Persist)
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading, selectError } from './redux/contactsSlice';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">İletişim Listesi</h1>

      {error && <div className="error-message">Hata: {error}</div>}

      <SearchBox />
      <ContactsForm />
      {isLoading ? (
        <div className="loading">Yükleniyor...</div>
      ) : (
        <ContactsList />
      )}
    </div>
  );
};

export default App;
