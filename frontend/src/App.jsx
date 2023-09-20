// import React, {useState} from 'react';
// import TopNavigationBar from './components/TopNavigationBar';
// import HomeRoute, {getFavourites} from 'routes/HomeRoute';
// import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import './App.scss';

// const App = () => {
//   const initialFav = getFavourites().length > 0 ? true : false
//   const [modalItem, setModalOpen] = useState();
//   const [ids, toggle] = useState(getFavourites());

//   function onChange(item) {
//     const favourites = getFavourites();
//     const set = new Set(favourites);

//     if (set.has(item.id)) {
//       set.delete(item.id);
//     } else {
//       set.add(item.id);
//     }

//     localStorage.setItem('favourites', JSON.stringify([...set]));
//     toggle([...set]);
//   }

//   return (
//     <div className="App">
//       <TopNavigationBar isFavPhotoExist={ids.length > 0} />
//       <HomeRoute setModalOpen={setModalOpen} onChange={onChange} favouritesIds={ids} />
//       {modalItem ? <PhotoDetailsModal favouritesIds={ids} onChange={onChange} close={()=> setModalOpen(false)} item={modalItem}/> : null}
//     </div>
//   );
// };

// export default App;

import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData'; 

const App = () => {
  const { modalItem, setModalOpen, ids, onChange } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar isFavPhotoExist={ids.length > 0} />
      <HomeRoute setModalOpen={setModalOpen} onChange={onChange} favouritesIds={ids} />
      {modalItem ? <PhotoDetailsModal favouritesIds={ids} onChange={onChange} close={() => setModalOpen(false)} item={modalItem} /> : null}
    </div>
  );
};

export default App;
