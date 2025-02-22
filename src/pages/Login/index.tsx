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
  const { apiUrl, setLoggedIn, setUserId, userId } = useContext(GlobalContext);
  const history = useHistory();
  const loggedIn = true; // added

  return (
    <>
      <Navbar loggedIn={false} title="Login" /> {/* added */}
      <div className="login">
        <p className="login-description">
          Welcome back to the world’s largest store. Or
          <Link to={pathLinks.createAccount}> create an account</Link> if you need one.
        </p>
        <TextBox inputType="text" value={username} label="username" onChange={(t) => setUsername(t)} />
        <TextBox inputType="text" value={password} label="password" onChange={(t) => setPassword(t)} />

        {/* added setLoggedIn */}
        {setLoggedIn && (
          <Button
            text="Login"
            onClick={async () => {
              /** After logging in -> home page */
              const data = await loginUser(apiUrl, username, password);
              setLoggedIn(true);
              setUserId(data.uuid);
              localStorage.setItem('x', data.uuid);
              console.log(data.uuid);
              history.push(pathLinks.home);
            }}
            enabled={loggedIn} // added
          />
        )}
      </div>
    </>
  );
};

export default Login;
