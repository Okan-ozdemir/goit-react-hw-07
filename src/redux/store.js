/**
 * Redux Store Yapılandırması
 *
 * Bu dosya Redux store'un temel yapılandırmasını içerir.
 *
 * Kullanılan Redux Slices:
 * - contactsSlice: Kişi listesi yönetimi
 * - filtersSlice: Arama filtresi yönetimi
 */

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
