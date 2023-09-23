import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { checked, toggleChecked } = props;
  const handleClick = () => {
    toggleChecked(); // This is a callback f-n that is passed from the parent componenet PhotoListItem. Executed when a button is clicked.
    console.log('Props:', props);
  };

  return (
    <button
      onClick={handleClick}
      className="PhotoFavButton">
      <span><i>
        <FavIcon
          displayAlert={checked}
          selected={checked} />
      </i></span>
    </button>
  );
}

export default PhotoFavButton;