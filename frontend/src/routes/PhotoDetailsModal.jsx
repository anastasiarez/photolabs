import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({close, item, onChange, favouritesIds}) => {
  console.log(item);
  const set = new Set(favouritesIds)


  return (
    <div className="photo-details-modal">
      <button onClick={close} className="photo-details-modal__close-button">
        
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem data={item} onChange={onChange} checked={set.has(item.id)} />
      <PhotoList onChange={onChange} favouritesIds={favouritesIds} showSimilarTopic={item.topic} excludeId={item.id} />
    </div>
  )
};

export default PhotoDetailsModal;
