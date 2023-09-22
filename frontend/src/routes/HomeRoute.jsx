import React from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

export function getFavourites() {
  const storage = localStorage.getItem('favourites');
  const favourites = storage ? JSON.parse(storage) : [];
  return favourites;
}

const HomeRoute = () => {
  return (
    <div className="home-route">
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
