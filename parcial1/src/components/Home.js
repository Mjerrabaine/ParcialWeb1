import React, { useState, useEffect } from 'react';
import userData from './data/MOCK_DATA.json';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';

const Home = ({ user }) => {
    const [images, setImages] = useState([]);
    const [profilePic, setProfilePic] = useState(''); 
    const [showModal, setShowModal] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState(''); 

    useEffect(() => {
        const fetchImages = async () => {
          const imageUrls = Array.from({ length: 10 }, () => `https://picsum.photos/350?random=${Math.random()}`);
          setImages(imageUrls);
  
          setProfilePic(`https://picsum.photos/350?random=profile`);
        };
    
        fetchImages();
      }, []);

    const getGridClass = () => {
        const width = window.innerWidth;
        return "grid-6x5";
      };
  

    const handleImageClick = (url) => {
        const largerImageUrl = url.replace('350', '600'); 
        setModalImageUrl(largerImageUrl);
        setShowModal(true);
    };
  
    return (
        <div className="home">
        <div className={`image-grid ${getGridClass()}`}>
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Random ${index}`}
              onClick={() => handleImageClick(url)} 
            />
          ))}
        </div>
        <ImageModal user={user} show={showModal} imageUrl={modalImageUrl} onClose={() => setShowModal(false)} />

        <div className="user-details">
            <img src={profilePic} alt="Profile" className="profile-picture" />
            <h2>{user.nombre}</h2>
            <p><strong>{user.longitud_entrenamiento}</strong></p>
            <p>{user.duracion}</p>
            <a href={user.url}>{user.ciudad}</a>
        </div>
      </div>
    );
  };
  
  export default Home;