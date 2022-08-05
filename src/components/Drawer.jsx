import React from 'react';

function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30">
          Корзина
          <img className="removeBtn imgBtn" src="./img/icons/remove-btn.svg" alt="remove" />
        </h2>

        <div className="cartItems">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(./img/sneakers/1.jpg)' }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 грн.</b>
            </div>
            <img className="removeBtn imgBtn" src="./img/icons/remove-btn.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(./img/sneakers/1.jpg)' }}></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 грн.</b>
            </div>
            <img className="removeBtn" src="./img/icons/remove-btn.svg" alt="remove" />
          </div>
        </div>
        <div className="prices">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 грн.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
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
