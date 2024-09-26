import React from 'react';
//import './Detail.css';
import userData from './data/MOCK_DATA.json';

const Detail = ({ user,show, imageUrl, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src={imageUrl} alt="Card image cap"/>
          <div class="card-body">
          <h1>Running Sesion</h1>
            <h2>Recorrido Alrededor de :<strong> {user.ciudad}</strong></h2>
            <h2><strong> {user.longitud_entrenamiento}</strong></h2>
            <h2><strong> {user.duracion}</strong></h2>
          </div>
        </div>
          <card className="card-view"> 
            <img src={imageUrl} alt="Enlarged" className="modal-image" />
            <h1>Running Sesion</h1>
            <h2>Recorrido Alrededor de :<strong> {user.ciudad}</strong></h2>
            <h2><strong> {user.longitud_entrenamiento}</strong></h2>
            <h2><strong> {user.duracion}</strong></h2>
          </card>

          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    );
  };
  
  export default Detail;