import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

function getFavourites() {
  const storage = localStorage.getItem('favourites');
  const favourites = storage ? JSON.parse(storage) : [];
  return favourites;
}

const HomeRoute = () => {

  const [ids, toggle] = useState(getFavourites());

  function onChange(item) {
    const favourites = getFavourites();
    const set = new Set(favourites);
    if (set.has(item.id)) {
      set.delete(item.id);
    } else {
      set.add(item.id);
    }

    localStorage.setItem('favourites', JSON.stringify([...set]));
    toggle([...set]);


  }
  return (
    <div className="home-route">
      <PhotoList onChange={onChange} favouritesIds={ids} />
    </div>
  );
};

export default HomeRoute;
