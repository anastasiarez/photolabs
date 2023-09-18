import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <HomeRoute />


    </div>
  );
};

export default App;

