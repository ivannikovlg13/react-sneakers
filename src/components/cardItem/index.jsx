import React from 'react';
import styles from './cardItem.module.scss';

function CardItem({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  addFavorites,
  isFavorited = false,
  addToFavorites,
}) {
  const [addItem, setAddItem] = React.useState(false);
  const [addFavorite, setAddFavorite] = React.useState(isFavorited);

  const onAddItem = () => {
    onPlus({ name, price, imageUrl, id });
    setAddItem((state) => !state);
  };

  const onAddFavorite = () => {
    addFavorites({ name, price, imageUrl, id });
    setAddFavorite((state) => !state);
  };
  return (
    <div className={styles.cardItem}>
      <img
        className={styles.imgBtn}
        onClick={onAddFavorite}
        src={addFavorite ? './img/icons/liked-btn.svg' : './img/icons/unliked-btn.svg'}
        alt="unliked"
      />
      <img width={133} src={imageUrl} alt="item" />
      <p>{name}</p>
      <div className={styles.infoBox}>
        <div className="d-flex flex-column">
          <span className="price text-uppercase">Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.imgBtn}
          onClick={onAddItem}
          src={addItem ? './img/icons/checked-btn.svg' : './img/icons/add-btn.svg'}
          alt="add"
        />
      </div>
    </div>
  );
}

export default CardItem;
