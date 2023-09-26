import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { checked, toggleChecked } = props;
  const handleClick = () => {
    toggleChecked(); // This is a callback f-n that is passed from the parent componenet PhotoListItem. Executed when a button is clicked.
  };

  return (
    <button
      onClick={handleClick}
      className={"PhotoFavButton" + (checked ? " active" : "")}>
      <span><i>
        <FavIcon
          displayAlert={false}
          selected={checked} />
      </i></span>
    </button>
  );
}

export default PhotoFavButton;