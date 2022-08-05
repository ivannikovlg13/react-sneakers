import { Header, CardItem, Drawer } from './components';
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <section className="card">
        <div className="d-flex justify-between align-center mb-40 mt-40">
          <h1>Все кроссовки</h1>
          <div className="search__block d-flex align-center pl-10 pr-10">
            <img src="./img/icons/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="card__items">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>
    </div>
  );
}

export default App;
