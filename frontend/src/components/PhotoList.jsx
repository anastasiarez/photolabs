import React, { useEffect } from "react";
import PhotoListItem from './PhotoListItem';

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import useApplicationData from "hooks/useApplicationData";

const PhotoList = ({ excludeId }) => {
  const { photoData, setPhotos, topicData, ids } = useApplicationData();

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch("http://localhost:8001/api/photos");
      const data = await response.json();
      setPhotos(data);
    }

    const topicPath = location.pathname.split("/")[2];
    const topic = topicData.find(topic => topic.slug === topicPath);

    if (topicPath && topicData.length === 0) return


    if (topic) {
      async function fetchPhotosByTopic() {
        const response = await fetch(`http://localhost:8001/api/topics/photos/${topic.id}`);
        const data = await response.json();
        setPhotos(data);
      };
      fetchPhotosByTopic();
    } else {
      fetchPhotos();
    }
  },
    [topicData.length]);


  const set = new Set(ids);

  return (
    <ul className="photo-list">
      {photoData.filter(photo => photo.id !== excludeId).map((photo) => (
        <PhotoListItem
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

