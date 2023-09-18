import React from "react";
import TopicListItem from "./TopicListItem";
import topicsMocks from "../mocks/topics";

import "../styles/TopicList.scss";



const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
        {topicsMocks.map((topic) => (
          <TopicListItem key={topic.id} topic={topic} />
        ))}
    </div>
  );
};

export default TopicList;
