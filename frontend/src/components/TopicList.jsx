import React, { useEffect } from "react";
import TopicListItem from "./TopicListItem";
import useApplicationData from "hooks/useApplicationData";
import "../styles/TopicList.scss";



const TopicList = () => {
  const { setTopics, topicData } = useApplicationData();
  useEffect(() => {
    async function fetchTopics() {
      const response = await fetch("http://localhost:8001/api/topics");
      const data = await response.json();
      setTopics(data);
    }
    fetchTopics();
  }, []);

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
