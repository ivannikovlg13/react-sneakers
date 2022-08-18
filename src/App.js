import Drawer from './components/drawer';
import Home from './pages/Home';
import Header from './components/header';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [onCart, setOnCart] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const itemsResponse = await axios.get('https://62f283c2b1098f150814998d.mockapi.io/items');
      const cartResponse = await axios.get('https://62f283c2b1098f150814998d.mockapi.io/cart');
      const favoritesResponse = await axios.get(
        'https://62f283c2b1098f150814998d.mockapi.io/favorites',
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavoriteItems(favoritesResponse.data);
      setItems(itemsResponse.data);
    };

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://62f283c2b1098f150814998d.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };
  const onRemoveWithCart = (id) => {
    axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToFavorites = async (obj) => {
    try {
      if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/favorites/${obj.id}`);
        setFavoriteItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
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
  const filterItems =
    items &&
    items.filter((item) => {
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{ items, cartItems, favoriteItems, isItemAdded, closeCart, setCartItems }}>
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
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }></Route>
          <Route
            path="/favorites"
            element={<Favorites addToFavorites={onAddToFavorites} />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
