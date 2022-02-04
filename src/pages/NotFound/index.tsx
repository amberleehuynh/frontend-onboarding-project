import React from 'react';
import Navbar from '../../components/Navbar';

function NotFound() {
  return (
    <>
      <Navbar loggedIn title="404 Page Not Found" />
      <div className="notFound">
        <p>This page doesn&apos;t exist!</p>
      </div>
    </>
  );
}

export default NotFound;
