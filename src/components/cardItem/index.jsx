import React from 'react';
import styles from './cardItem.module.scss';
import AppContext from '../../context';

function CardItem({ id, name, price, imageUrl, onPlus, addFavorites, isFavorited = false }) {
  const { isItemAdded } = React.useContext(AppContext);
  const [addFavorite, setAddFavorite] = React.useState(isFavorited);
  const obj = { name, price, imageUrl, id, parentId: id };
  const onAddItem = () => {
    onPlus(obj);
  };

  const onAddFavorite = () => {
    addFavorites(obj);
    setAddFavorite((state) => !state);
  };
  return (
    <div className="cardItem">
      {addFavorites && (
        <img
          className={styles.imgBtn}
          onClick={onAddFavorite}
          src={addFavorite ? './img/icons/liked-btn.svg' : './img/icons/unliked-btn.svg'}
          alt="unliked"
        />
      )}
      <img width="100%" height={135} src={imageUrl} alt="item" />
      <p>{name}</p>
      <div className={styles.infoBox}>
        <div className="d-flex flex-column">
          <span className="price text-uppercase">Цена:</span>
          <b>{price}</b>
        </div>
        {onPlus && (
          <img
            className={styles.imgBtn}
            onClick={onAddItem}
            src={isItemAdded(id) ? './img/icons/checked-btn.svg' : './img/icons/add-btn.svg'}
            alt="add"
          />
        )}
      </div>
    </div>
  );
}

export default CardItem;
