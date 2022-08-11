import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header({ openCart }) {
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
          <span className="ml-10 mr-30">8888грн.</span>
        </li>
        <Link to="/favorites">
          <li>
            <img src="./img/icons/favorite.svg" alt="favorite" />
          </li>
        </Link>
        <li>
          <img src="./img/icons/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
