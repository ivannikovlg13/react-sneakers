import Drawer from './components/drawer';
import Home from './pages/Home';
import Header from './components/header';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [onCart, setOnCart] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
          axios.get('https://62f283c2b1098f150814998d.mockapi.io/items'),
          axios.get('https://62f283c2b1098f150814998d.mockapi.io/cart'),
          axios.get('https://62f283c2b1098f150814998d.mockapi.io/favorites'),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavoriteItems(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://62f283c2b1098f150814998d.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.log(error);
    }
  };
  const onRemoveWithCart = async (id) => {
    try {
      await axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Не удалось удалить обЪект');
      console.log(error);
    }
  };
  const onAddToFavorites = async (obj) => {
    try {
      if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
        await axios.delete(`https://62f283c2b1098f150814998d.mockapi.io/favorites/${obj.id}`);
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
      console.error(error);
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
    setOnCart(true);
  };

  const closeCart = () => {
    setOnCart(false);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        isItemAdded,
        closeCart,
        setCartItems,
        onAddToCart,
        onAddToFavorites,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          closeCart={closeCart}
          deleteItem={onRemoveWithCart}
          opened={onCart}
        />
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
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
