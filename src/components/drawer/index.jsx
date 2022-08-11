import React from 'react';
import styles from './drawer.module.scss';

function Drawer({ closeCart, items = [], deleteItem }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className=" d-flex justify-between mb-30">
          Корзина
          <img
            onClick={closeCart}
            className={styles.removeBtn}
            src="./img/icons/remove-btn.svg"
            alt="remove"
          />
        </h2>
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div
                className={styles.cartItemImg}
                style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
              <div className="mr-20 flex">
                <p className="mb-5">{item.name}</p>
                <b>{item.price}</b>
              </div>
              <img
                className={styles.removeBtn}
                onClick={() => deleteItem(item.id)}
                src="./img/icons/remove-btn.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <button className="greenBtn">
          Оформить заказ
          <img src="./img/icons/arrow-right.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
