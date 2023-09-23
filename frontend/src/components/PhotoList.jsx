import React, { useEffect } from "react";
import PhotoListItem from './PhotoListItem';
import useApplicationData from "hooks/useApplicationData";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";

const PhotoList = ({ similar }) => {
  const { photoData, setPhotos, topicData, ids } = useApplicationData();

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch("http://localhost:8001/api/photos");
      const data = await response.json();
      setPhotos(data);
    }

    const topicPath = location.pathname.split("/")[2];
    const topic = topicData.find(topic => topic.slug === topicPath);

    if (topicPath && topicData.length === 0) return;
    if (similar) return;

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


  const set = new Set(ids); // create a new Set data structure and use the values from the ids array to initialize this set. It ensures that each value in the set is unique, and it automatically removes duplicates.

  return (
    <ul className="photo-list">
      {(similar ?? photoData).map((photo) => (
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

