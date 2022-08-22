import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { useCart } from '../../hooks/useCart';

function Header({ openCart }) {
  const { totalPrice } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link className="d-flex" to="/">
          <img className="mr-15" src="./img/logo.png" width={40} height={40} alt="logo" />

          <div>
            <h3 className="text-uppercase fw-bold">React Sneakers</h3>
            <p> Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>

      <ul className="d-flex flex-row align-center">
        <li onClick={openCart} className="d-flex align-center mb-5">
          <img src="./img/icons/cart.svg" alt="cart" />
          <span className="ml-10 mr-30">{totalPrice}$</span>
        </li>
        <Link to="/favorites">
          <li>
            <img src="./img/icons/favorite.svg" alt="favorite" />
          </li>
        </Link>
        <Link to="/orders">
          <li>
            <img src="./img/icons/user.svg" alt="user" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
