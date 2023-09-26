import React, { useEffect } from "react";
import PhotoListItem from './PhotoListItem';
import useApplicationData from "hooks/useApplicationData";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";

const PhotoList = ({ similar }) => {
  const { photoData, topicData, favourites, fetchPhotosData } = useApplicationData();

  useEffect(() => {
    const topicPath = location.pathname.split("/")[2];
    const topic = topicData.find(topic => topic.slug === topicPath);

    if (topicPath && topicData.length === 0) return;
    if (similar) return;

    fetchPhotosData(topic)
  },
    [topicData.length]);

    
  const set = new Set(favourites); // create a new Set data structure and use the values from the ids array to initialize this set. It ensures that each value in the set is unique, and it automatically removes duplicates.

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

