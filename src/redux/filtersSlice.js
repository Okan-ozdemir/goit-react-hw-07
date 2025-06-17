/**
 * Filters Slice
 *
 * Arama filtresi yönetimi için Redux slice.
 * Kullanıcının girdiği arama terimini saklar.
 *
 * State yapısı:
 * {
 *   value: string // Arama terimi
 * }
 */

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    // Arama terimini güncelleme
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
