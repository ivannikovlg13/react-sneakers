import React from 'react';
import CardItem from '../components/cardItem';

function Home({
  onSearchValue,
  clearSearch,
  searchValue,
  filterItems,
  onAddToCart,
  onAddToFavorites,
}) {
  return (
    <section className="card">
      <div className="d-flex justify-between align-center mb-40 mt-40">
        <h1>Все кроссовки</h1>
        <div className="search__block d-flex align-center pl-10 pr-10">
          <img src="./img/icons/search.svg" alt="search" />
          <input onChange={onSearchValue} value={searchValue} type="text" placeholder="Search..." />
          {searchValue && (
            <img
              className="removeBtn search"
              onClick={clearSearch}
              src="./img/icons/remove-btn.svg"
              alt="remove"
            />
          )}
        </div>
      </div>

      <div className="card__items">
        {filterItems.map((item) => (
          <CardItem key={item.id} {...item} onPlus={onAddToCart} addFavorites={onAddToFavorites} />
        ))}
      </div>
    </section>
  );
}

export default Home;
