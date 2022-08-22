import React from 'react';
import axios from 'axios';
import CardItem from '../components/cardItem';
import LoadingBlock from '../components/cardItem/loadingBlock';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://62f283c2b1098f150814998d.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказа');
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="card">
      <h1 className="mb-40 mt-40">Mои заказы</h1>
      <div className="card__items">
        {isLoading
          ? Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)
          : orders.map((item, index) => <CardItem key={index} {...item} />)}
      </div>
    </div>
  );
}

export default Orders;
