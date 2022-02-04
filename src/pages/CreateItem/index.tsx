import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createItem } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateItem: React.FC = () => {
  const history = useHistory();
  const { apiUrl } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const descriptionState = useState('');
  const [price, setPrice] = useState('');
  const loggedIn = true; // added

  return (
    <>
      <Navbar loggedIn title="Create Item" /> {/* added */}
      <div className="createItem">
        <p className="createItem-description">Add an item to the world’s greatest store</p>
        <TextBox inputType="text" value={name} label="name" onChange={(t) => setName(t)} />
        <TextBox inputType="text" value={descriptionState[0]} label="description" onChange={(t) => descriptionState[1](t)} />
        <TextBox inputType="text" value={price} label="price" onChange={(t) => setPrice(t)} />
        <Button
          text="Create Item"
          onClick={async () => {
            const priceNumber = parseFloat(price);
            await createItem(apiUrl, name, descriptionState[0], priceNumber); // Check
            history.push(pathLinks.home); // when we're done, go home to see the new item!
          }}
          enabled={loggedIn} // added
        />
      </div>
    </>
  );
};

export default CreateItem;
