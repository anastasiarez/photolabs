import React from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

export function getFavourites() {
  const storage = localStorage.getItem('favourites');
  const favourites = storage ? JSON.parse(storage) : [];
  return favourites;
}

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <PhotoList onChange={props.onChange} favouritesIds={props.favouritesIds} setModalOpen={props.setModalOpen} />
    </div>
  );
};

export default HomeRoute;
