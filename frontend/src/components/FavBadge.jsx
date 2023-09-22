import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';
import useApplicationData from '../hooks/useApplicationData';

const FavBadge = () => {
  const {ids} = useApplicationData()
  const selected = ids.length > 0
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={selected} selected={selected} />
    </div>
  )
};

export default FavBadge;