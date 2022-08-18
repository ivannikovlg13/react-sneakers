import React from 'react';
import CardItem from '../components/cardItem';
import AppContext from '../context';

function Favorites({ addToFavorites }) {
  const { favoriteItems } = React.useContext(AppContext);
  return (
    <div className="card">
      <h1 className="mb-40 mt-40">Мои закладки</h1>
      <div className="card__items">
        {favoriteItems.map((item) => (
          <CardItem key={item.id} {...item} isFavorited={true} addFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
