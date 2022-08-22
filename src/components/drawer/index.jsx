import React from 'react';
import styles from './drawer.module.scss';
import axios from 'axios';
import Info from '../Info';
import { useCart } from '../../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ closeCart, items = [], deleteItem, opened }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://62f283c2b1098f150814998d.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://62f283c2b1098f150814998d.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось сделать заказ');
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
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
        {items.length > 0 ? (
          <div className={styles.cartItems}>
            <div className={styles.inner}>
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
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} $ </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.floor(totalPrice * 0.05)} $ </b>
                </li>
              </ul>
            </div>
            <button disabled={isLoading} onClick={onClickOrder} className="greenBtn">
              Оформить заказ
              <img src="./img/icons/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? './img/order.jpg' : './img/empty-cart.png'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
