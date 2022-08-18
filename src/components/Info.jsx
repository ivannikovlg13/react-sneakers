import React from 'react';
import AppContext from '../context';

function Info({ title, image, description }) {
  const { closeCart } = React.useContext(AppContext);
  return (
    <div className="cartWrapper">
      <img width={'120px'} className="mb-20" src={image} alt="stateCart" />
      <h2 className="mb-10">{title}</h2>
      <p className="opacity-4 mb-40">{description}</p>
      <button onClick={closeCart} className="greenBtn  left">
        Вернуться назад
        <img src="./img/icons/arrow-right.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default Info;
