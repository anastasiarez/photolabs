import React, { useReducer, useContext, createContext } from 'react';

// Helper function to get favourites from local storage
function getFavourites() {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
}

const initialState = {
  modalItem: null,
  ids: getFavourites(),
  photoData: [],
  topicData: []
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
      const favourites = [...state.ids];
      const index = favourites.indexOf(action.payload);

      if (index !== -1) {
        favourites.splice(index, 1);
      } else {
        favourites.push(action.payload);
      }

      localStorage.setItem('favourites', JSON.stringify(favourites));
      return { ...state, ids: favourites };

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

  const value = {
    modalItem: state.modalItem,
    setModalOpen,
    setPhotos,
    setTopics,
    ids: state.ids,
    onChange,
    photoData: state.photoData,
    topicData: state.topicData,
  };


  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default useApplicationData;



