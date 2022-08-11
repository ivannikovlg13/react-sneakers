import React from 'react';
import CardItem from '../components/cardItem';

function Favorites({ items, addToFavorites }) {
  return (
    <div className="card">
      <h1 className="mb-40 mt-40">Мои закладки</h1>
      <div className="card__items">
        {items.map((item) => (
          <CardItem key={item.id} {...item} isFavorited={true} addFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
