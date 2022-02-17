import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { createAccount } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateAccount: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { apiUrl, setLoggedIn } = useContext(GlobalContext);
  const history = useHistory();

  return (
    <>
      <Navbar loggedIn={false} title="Create Account" />
      <div className="createAccount">
        <p className="createAccount-description">
          Join the world’s largest store. Or
          <Link to={pathLinks.login}> login</Link> if you’re already part of our community.
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="text" value={password} label="password" onChange={(t) => setPassword(t)} />
        <Button
          text="Create an Account"
          onClick={async () => {
            // API will return the created user object -> use as if the user just completed a login
            // After creating an account -> home page
            await createAccount(apiUrl, username, password);
            setLoggedIn(true);
            history.push(pathLinks.home);
          }}
        />
      </div>
    </>
  );
};

export default CreateAccount;
