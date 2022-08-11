import { Drawer } from './components';
import Home from './pages/Home';
import Header from './components/header';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [onCart, setOnCart] = React.useState(false);
  React.useEffect(() => {
    axios
      .get('https://62f283c2b1098f150814998d.mockapi.io/items')
      .then(({ data }) => setItems(data));
    axios
      .get('https://62f283c2b1098f150814998d.mockapi.io/cart')
      .then(({ data }) => setCartItems(data));
    axios
      .get('https://62f283c2b1098f150814998d.mockapi.io/favorites')
      .then(({ data }) => setFavoriteItems(data));
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const { data } = await axios.post('https://62f283c2b1098f150814998d.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };
  const onRemoveWithCart = (id) => {
    axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToFavorites = async (obj) => {
    try {
      if (favoriteItems.find((item) => item.id === obj.id)) {
        axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          'https://62f283c2b1098f150814998d.mockapi.io/favorites',
          obj,
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранные');
    }
  };
  const filterItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const clearSearch = () => {
    setSearchValue('');
  };

  const openCart = () => {
    setOnCart(!onCart);
  };

  const closeCart = () => {
    setOnCart(!onCart);
  };

  return (
    <div className="wrapper clear">
      {onCart && <Drawer items={cartItems} closeCart={closeCart} deleteItem={onRemoveWithCart} />}
      <Header openCart={openCart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSearchValue={onSearchValue}
              clearSearch={clearSearch}
              searchValue={searchValue}
              filterItems={filterItems}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }></Route>
        <Route
          path="/favorites"
          element={<Favorites items={favoriteItems} addToFavorites={onAddToFavorites} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
