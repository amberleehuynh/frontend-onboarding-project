import React, { useContext, useEffect, useState } from 'react';
import { getOrders, Order } from '../../api';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../contexts/GlobalContext';
import './style.less';

// when implementing pages dependent on data, i find it helpful to get the styling right using a
// temporary array of data. then, once styling is finished, you can implement the api calls to get it all working
/*
const exampleOrders: Order[] = [
  {
    createdAt: Date.now(),
    uuid: 'some id',
    item: {
      name: 'Pineapple',
      price: 2.5,
      uuid: 'some other id',
      description: "spongebob's home",
    },
    user: {
      username: 'a user',
      password: "in a real system, this wouldn't be exposed on the client like this",
      uuid: 'another id',
    },
  },
];
*/

const YourOrders: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orders, setOrders] = useState<Order[]>([]);
  const { apiUrl, userId } = useContext(GlobalContext);
  console.log(userId);

  useEffect(() => {
    if (userId === '') return;
    getOrders(apiUrl, userId).then((data) => setOrders(data));

    /*
    const data = [
      {
        uuid: '4a30ed0f-861a-4956-946e-cbeb0d734af4',
        item: {
          uuid: '68b44405-af33-4728-bf19-aa38b78e1ce3',
          name: 'corgi',
          description: 'doggo',
          price: 100,
        },
        user: {
          uuid: 'test',
          username: 'username',
          password: 'password',
        },
        createdAt: '2022-02-03T21:29:57.449Z',
      },
    ];
    setOrders(data);

    console.log(orders);
    */
  }, [apiUrl, userId]);

  return (
    <>
      <Navbar loggedIn title="Your Orders" />
      <div className="yourOrders">
        <p>Take a look at some of the best things you’ve ordered so far!</p>
        <table>
          <tbody>
            <tr>
              <th>item name</th>
              <th>price</th>
              <th>ordered at</th>
            </tr>
            {orders &&
              orders.map((order) => (
                <tr key={order.uuid}>
                  <td>{order.item.name}</td>
                  <td>{order.item.price}</td>
                  <td>{new Date(order.createdAt).toString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default YourOrders;
