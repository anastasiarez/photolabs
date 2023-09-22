import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { modalItem } = useApplicationData()

  return (
      <div className="App">
        <TopNavigationBar />
        <HomeRoute/>
        {modalItem ? <PhotoDetailsModal /> : null}
      </div>
  );
};

export default App;

