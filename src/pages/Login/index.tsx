/** This is how you can make a link <Link to={pathLinks.createAccount}>by using the Link tag from react router</Link> */

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { loginUser } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';
import './style.less';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { apiUrl } = useContext(GlobalContext);
  const history = useHistory();

  return (
    <>
      <Navbar title="Login" />
      <div className="login">
        <p className="login-description">
          Join the world’s largest store. Or
          <Link to={pathLinks.createAccount}> login</Link> if you’re already part of our community.
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="text" value={password} label="password" onChange={(t) => setPassword(t)} />
        <Button
          text="Login"
          onClick={async () => {
            /** After logging in -> home page */
            await loginUser(apiUrl, username, password);
            history.push(pathLinks.home);
          }}
        />
      </div>
    </>
  );
};

export default Login;
