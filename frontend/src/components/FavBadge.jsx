import React from 'react';
import FavIcon from './FavIcon';
import useApplicationData from '../hooks/useApplicationData';

import '../styles/FavBadge.scss';

const FavBadge = () => {
  const { favourites } = useApplicationData();
  const selected = favourites.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={selected} selected={selected} />
    </div>
  );
};

export default FavBadge;