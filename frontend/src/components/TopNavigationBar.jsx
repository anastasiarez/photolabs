import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <a className="top-nav-bar__logo" href='/'>PhotoLabs</a>
      <TopicList />
      <FavBadge />
    </div>
  );
};

export default TopNavigation;