import React from 'react';
import './ImageModal.css';

const ImageModal = ({ show, imageUrl, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Enlarged" className="modal-image" />
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default ImageModal;