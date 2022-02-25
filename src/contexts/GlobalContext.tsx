import React, { useState } from 'react';

type GlobalContextType = {
  apiUrl: string;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>; // this is the setUser function type
  loggedIn: boolean; // added
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // added
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = React.createContext<GlobalContextType>(null as any);

export const GlobalProvider: React.FC = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://backend-onboarding-project.herokuapp.com');
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('x'));
  const [userId, setUserId] = useState(localStorage.getItem('x') || '');

  return (
    <GlobalContext.Provider
      value={{
        apiUrl,
        setApiUrl,
        loggedIn,
        setLoggedIn,
        userId,
        setUserId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
