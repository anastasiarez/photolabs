import React, { useReducer, useContext, createContext, useEffect } from 'react';

// Helper function to get favourites from local storage
function getFavourites() {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
}

function notImplemented() {
  throw new Error('Method not implemented!')
}

const initialState = {
  modalItem: null,
  favourites: getFavourites(),
  photoData: [],
  topicData: [],
  setModalOpen: notImplemented,
  setPhotos: notImplemented,
  setTopics: notImplemented,
  onChange: notImplemented,
  fetchPhotosData: notImplemented
};

const DataContext = createContext(initialState); //a way to pass data down the component tree without having to pass props manually at every level. It's a way to share data between components that are not directly connected in the component hierarchy.

// Define action types
const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPICS = 'SET_TOPICS';
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const SET_MODAL_OPEN = 'SET_MODAL_OPEN';


// Reducer function to handle state updates
function reducer(state, action) {

  switch (action.type) {
    case SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case SET_TOPICS:
      return { ...state, topicData: action.payload };
    case SET_MODAL_OPEN:
      return { ...state, modalItem: action.payload };
    case TOGGLE_FAVOURITE:
      const favourites = [...state.favourites];
      const index = favourites.indexOf(action.payload);

      if (index !== -1) {
        favourites.splice(index, 1);
      } else {
        favourites.push(action.payload);
      }

      localStorage.setItem('favourites', JSON.stringify(favourites));
      return { ...state, favourites };

    default:
      return state;
  }
}

function useApplicationData() {
  const state = useContext(DataContext); //useContext hook to access the data stored in the DataContext context.
  return state;
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);


  // Action creators
  const setModalOpen = (item) => {
    dispatch({ type: SET_MODAL_OPEN, payload: item });
  };

  const setPhotos = (photos) => {
    dispatch({ type: SET_PHOTO_DATA, payload: photos });
  };

  const setTopics = (topics) => {
    dispatch({ type: SET_TOPICS, payload: topics });
  };

  const onChange = (item) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: item.id });
  };

  async function fetchPhotosData(topic) {
    async function fetchPhotos() {
      const response = await fetch("http://localhost:8001/api/photos");
      return await response.json();
    }

    async function fetchPhotosByTopic() {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topic.id}`);
      return await response.json();
    };

    const photos = topic ? await fetchPhotosByTopic() : await fetchPhotos()

    setPhotos(photos)
  }

  const value = {
    ...state,
    fetchPhotosData,
    setModalOpen,
    setPhotos,
    setTopics,
    onChange,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default useApplicationData;



