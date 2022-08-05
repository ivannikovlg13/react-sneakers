import { Header, CardItem, Drawer } from './components';

const items = [
  {
    id: 1,
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999 руб.',
    imageUrl: './img/sneakers/1.jpg',
  },
  {
    id: 2,
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999 руб.',
    imageUrl: './img/sneakers/2.jpg',
  },
  {
    id: 3,
    name: 'Мужские Мужские Кроссовки Under Armour Curry 8',
    price: '8 499 руб.',
    imageUrl: './img/sneakers/3.jpg',
  },
  {
    id: 4,
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '9 499 руб.',
    imageUrl: './img/sneakers/4.jpg',
  },
  {
    id: 5,
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: '13 499 руб.',
    imageUrl: './img/sneakers/5.jpg',
  },
  {
    id: 6,
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '6 499 руб.',
    imageUrl: './img/sneakers/6.jpg',
  },
  {
    id: 7,
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: '8 449 руб.',
    imageUrl: './img/sneakers/7.jpg',
  },
  {
    id: 8,
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: '22 469 руб.',
    imageUrl: './img/sneakers/8.jpg',
  },
  {
    id: 9,
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '20 499 руб.',
    imageUrl: './img/sneakers/9.jpg',
  },
  {
    id: 10,
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: '19 499 руб.',
    imageUrl: './img/sneakers/10.jpg',
  },
];
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
          {items.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
