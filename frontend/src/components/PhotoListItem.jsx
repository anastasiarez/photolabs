import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';
import useApplicationData from 'hooks/useApplicationData';

const PhotoListItem = (props) => {
  const {onChange, setModalOpen, modalItem} = useApplicationData()
  const { location, urls, user } = props.data;

  const toggleChecked = () => {
    onChange(props.data);
  };

  return (
    <div className="photo-list-item">
      <div className="photo-list-item__image-container">
        <PhotoFavButton
          checked={props.checked}
          toggleChecked={toggleChecked} />
        <img onClick={() => !modalItem && setModalOpen(props.data)}
          className="photo-list-item__image"
          src={urls.regular}
          alt="Photo"
        />
      </div>
      <div className="photo-list-item__info">
        <div className="photo-list-item__info__user">
          <img
            className="photo-list-item__info__user__profile"
            src={user.profile}
            alt="Profile"
          />
        </div>
        <div className="photo-list-item__info__user__container">
          <div className="photo-list-item__info__user__username">
            {user.name}
            <div className="photo-list-item__info__location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;