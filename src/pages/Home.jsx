import React from 'react';
import CardItem from '../components/cardItem';
import LoadingBlock from '../components/cardItem/loadingBlock';

function Home({
  onSearchValue,
  clearSearch,
  searchValue,
  filterItems,
  onAddToCart,
  onAddToFavorites,
  isLoading,
}) {
  const renderItems = () => {
    return isLoading
      ? Array(10)
          .fill(0)
          .map((_, index) => <LoadingBlock key={index} />)
      : filterItems.map((item) => (
          <CardItem key={item.id} {...item} onPlus={onAddToCart} addFavorites={onAddToFavorites} />
        ));
  };

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

      <div className="card__items">{renderItems()}</div>
    </section>
  );
}

export default Home;
