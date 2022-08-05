import { Header, CardItem } from './components';
function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <section className="card">
        <h1>Все кроссовки</h1>
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
