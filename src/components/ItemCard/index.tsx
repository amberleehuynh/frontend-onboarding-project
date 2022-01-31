import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { deleteItem, orderItem } from '../../api';
import { GlobalContext } from '../../contexts/GlobalContext';
import Button from '../Button';
import './style.less';

interface ItemCardProps {
  name: string;
  price: number;
  description: string;
  uuid: string;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price, description, uuid }) => {
  const { apiUrl } = useContext(GlobalContext);
  const loggedIn = true; // somehow, this should get set

  const history = useHistory();
  return (
    <div className="itemCard">
      <div className="itemCard-header">
        <span className="itemCard-header-itemName">{name}</span>
        <span className="itemCard-header-price">
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>
      <p>{description}</p>

      <p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="button-link"
          href="#"
          onClick={async (e) => {
            e.preventDefault();
            await deleteItem(apiUrl, uuid);
            history.go(0); // rerenders the page
          }}
        >
          i don&apos;t like this, delete
        </a>
      </p>

      <Button
        text="Order Item"
        onClick={() => {
          orderItem(apiUrl, '', uuid);
        }}
        enabled={loggedIn}
      />
    </div>
  );
};

export default ItemCard;
