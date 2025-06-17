/**
 * Arama Kutusu Bileşeni
 *
 * Bu bileşen, kişi listesinde arama yapmak için kullanılan
 * arama kutusunu oluşturur.
 *
 * Özellikler:
 * - Anlık arama (her karakter girildiğinde filtreleme yapar)
 * - Redux ile durum yönetimi
 */

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className="search-box">
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Kişi ara..."
      />
    </div>
  );
};

export default SearchBox;
