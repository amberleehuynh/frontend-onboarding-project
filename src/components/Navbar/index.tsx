import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { pathLinks } from '../../pathLinks';

import TextBox from '../TextBox';
import './style.less';

interface NavbarProps {
  title: string;
  loggedIn: boolean; // added
}

// added
const Navbar: React.FC<NavbarProps> = ({ title, loggedIn }) => {
  const { apiUrl, setApiUrl, setLoggedIn } = useContext(GlobalContext);
  const history = useHistory();
  // const loggedIn = true; // somehow, this should get set

  return (
    <>
      <div className="navbar">
        <span className="navbar-logo">{title}</span>

        <div className="navbar-links">
          <Link to="/">home</Link>
          {/* {loggedIn && <Link to={pathLinks.home}>home</Link>} */}
          {!loggedIn && <Link to={pathLinks.login}>login</Link>}
          {loggedIn && <Link to={pathLinks.createItem}>create item</Link>}
          {loggedIn && <Link to={pathLinks.orders}>your orders</Link>}
          {loggedIn && (
            // I'm lazy here oop
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLoggedIn(false);
                localStorage.removeItem('x');
                // eslint-disable-next-line no-alert
                alert('Logging out');
                history.push(pathLinks.login);
                history.go(0); // rerenders the page
              }}
            >
              logout
            </a>
          )}
        </div>
      </div>
      <div className="textBoxContainer">
        <TextBox label="api url" value={apiUrl} onChange={setApiUrl} inputType="text" />
      </div>
    </>
  );
};

export default Navbar;
