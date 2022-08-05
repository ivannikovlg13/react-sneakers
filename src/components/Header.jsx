import React from 'react';

function Header() {
  return (
    <header className="d-flex justify-between">
      <div className="d-flex align-center left-block">
        <img className="mr-15 imgBtn" src="./img/logo.png" width={40} height={40} alt="logo" />
        <div>
          <h3 className="text-uppercase fw-bold">React Sneakers</h3>
          <p> Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex flex-row align-center">
        <li className="d-flex align-center mb-5">
          <img className="imgBtn" src="./img/icons/cart.svg" alt="cart" />
          <span className="ml-10 mr-30">8888грн.</span>
        </li>
        <li>
          <img className="imgBtn" src="./img/icons/favorite.svg" alt="favorite" />
        </li>
        <li>
          <img className="imgBtn" src="./img/icons/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
