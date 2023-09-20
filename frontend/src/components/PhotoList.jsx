import React from "react";
import PhotoListItem from './PhotoListItem';
import photosMocks from "../mocks/photos";
import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";

const PhotoList = ({ onChange, favouritesIds, setModalOpen, showSimilarTopic, excludeId }) => {
  const topic = showSimilarTopic ?  showSimilarTopic : location.pathname.split("/")[2];
  const filteredPhotos = photosMocks.filter((photo) => photo.topic === topic);
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
      {photos.filter(photo => photo.id !== excludeId).map((photo) => (
        <PhotoListItem
          onChange={onChange}
          setModalOpen={setModalOpen}
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

