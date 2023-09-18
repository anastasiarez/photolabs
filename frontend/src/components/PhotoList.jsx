import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import photosMocks from "../mocks/photos";

const PhotoList = ({ onChange, favouritesIds }) => {
  const topic = location.pathname.split("/")[2];
  const filteredPhotos = photosMocks.filter(
    (photo) => photo.topic === topic
  );
  let photos = [];

  if (topic) {
    if (filteredPhotos.length) photos = filteredPhotos;
    else photos = [];
  } else {
    photos = photosMocks;
  }
  const set = new Set(favouritesIds);

  return (
    <ul className="photo-list">
      {photos.length === 0 ? "No results" : null}
      {photos.map((photo) => (
        <PhotoListItem
          onChange={onChange}
          checked={set.has(photo.id)}
          key={photo.id}
          data={photo}
          className="photo-list-item"
        />
      ))}
    </ul>
  );
};

export default PhotoList;

