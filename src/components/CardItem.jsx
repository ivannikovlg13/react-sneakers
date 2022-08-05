import React from 'react';

function CardItem({ name, price, imageUrl }) {
  return (
    <div className="card__item mb-40">
      <img className="imgBtn" src="./img/icons/unliked-btn.svg" alt="unliked" />
      <img width={133} src={imageUrl} alt="item" />
      <p>{name}</p>
      <div className="d-flex justify-between align-center info__box mt-20">
        <div className="d-flex flex-column">
          <span className="price text-uppercase">Цена:</span>
          <b>{price}</b>
        </div>
        <img className="imgBtn" src="./img/icons/add-btn.svg" alt="add" />
      </div>
    </div>
  );
}

export default CardItem;
