import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import useApplicationData from 'hooks/useApplicationData';

const PhotoDetailsModal = () => {
  const { modalItem, setModalOpen, ids } = useApplicationData();

  const set = new Set(ids)


  return (
    <div className="photo-details-modal">
      <button onClick={() => setModalOpen(null)} className="photo-details-modal__close-button">
        
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem data={modalItem} checked={set.has(modalItem.id)} />
      <PhotoList excludeId={modalItem.id} />
    </div>
  )
};

export default PhotoDetailsModal;
