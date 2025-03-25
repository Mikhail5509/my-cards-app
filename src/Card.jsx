import React from 'react';

const Card = ({ title, text, image, children }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && <img src={image} className="card-img-top" alt="Card" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
