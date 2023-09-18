import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { checked, toggleChecked } = props;
  const handleClick = () => {
    console.log('Props:', props);
    toggleChecked();
  };

  return (
    <button onClick={handleClick} className="PhotoFavButton">
      <span><i><FavIcon displayAlert={checked} selected={checked} /></i></span>
    </button>
  );
}

export default PhotoFavButton;