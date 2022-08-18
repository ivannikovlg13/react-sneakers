import React from 'react';
import styles from './cardItem.module.scss';
import AppContext from '../../context';

function CardItem({ id, name, price, imageUrl, onPlus, addFavorites, isFavorited = false }) {
  const { isItemAdded } = React.useContext(AppContext);
  const [addFavorite, setAddFavorite] = React.useState(isFavorited);

  const onAddItem = () => {
    onPlus({ name, price, imageUrl, id });
  };

  const onAddFavorite = () => {
    addFavorites({ name, price, imageUrl, id });
    setAddFavorite((state) => !state);
  };
  return (
    <div className="cardItem">
      <img
        className={styles.imgBtn}
        onClick={onAddFavorite}
        src={addFavorite ? './img/icons/liked-btn.svg' : './img/icons/unliked-btn.svg'}
        alt="unliked"
      />
      <img width="100%" height={135} src={imageUrl} alt="item" />
      <p>{name}</p>
      <div className={styles.infoBox}>
        <div className="d-flex flex-column">
          <span className="price text-uppercase">Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.imgBtn}
          onClick={onAddItem}
          src={isItemAdded(id) ? './img/icons/checked-btn.svg' : './img/icons/add-btn.svg'}
          alt="add"
        />
      </div>
    </div>
  );
}

export default CardItem;
