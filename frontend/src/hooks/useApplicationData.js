import { useState } from 'react';

// Helper function to get favourites from local storage
function getFavourites() {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
}

function useApplicationData() {
  const [modalItem, setModalOpen] = useState();
  const [ids, toggle] = useState(getFavourites());

  // Function to toggle the favourite status
  function onChange(item) {
    const favourites = getFavourites();
    const set = new Set(favourites);

    if (set.has(item.id)) {
      set.delete(item.id);
    } else {
      set.add(item.id);
    }

    localStorage.setItem('favourites', JSON.stringify([...set]));
    toggle([...set]);
  }

  return {
    modalItem,
    setModalOpen,
    ids,
    onChange,
  };
}

export default useApplicationData;
