import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import closeSymbol from '../assets/closeSymbol.svg';
import useApplicationData from 'hooks/useApplicationData';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = () => {
  const { modalItem, setModalOpen, ids } = useApplicationData();
  console.log(modalItem);
  const set = new Set(ids);
  const topicO = modalItem.similar;

  return (
    <div className="photo-details-modal" >
      <button onClick={() => setModalOpen(null)} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem data={modalItem} checked={set.has(modalItem.id)} showBigPhoto />
      <PhotoList excludeId={modalItem.id} topicO={topicO} similar={modalItem.similar_photos} />
    </div>
  );
};

export default PhotoDetailsModal;
