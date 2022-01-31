import React, { useContext, useEffect, useState } from 'react';
import { getItems, Item } from '../../api';
import ItemCard from '../../components/ItemCard';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../contexts/GlobalContext';
import './style.less';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { apiUrl } = useContext(GlobalContext);
  // const { itemId } = useContext(GlobalContext);

  useEffect(() => {
    getItems(apiUrl).then((data) => setItems(data));
    // deleteItem(apiUrl).then((data) => setItems(data));
  }, []);

  return (
    <>
      <Navbar title="Store Lite" />
      <div className="items">
        {items.map((item) => (
          <ItemCard key={item.uuid} name={item.name} price={item.price} description={item.description} uuid={item.uuid} />
        ))}
        {items.length === 0 && <p>No items in the store yet :( </p>}
      </div>
    </>
  );
};

export default Home;
