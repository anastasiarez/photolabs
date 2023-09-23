import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const { modalItem } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar />
      <HomeRoute />
      {modalItem ? <PhotoDetailsModal /> : null}
    </div>
  );
};

export default App;

