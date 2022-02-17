import React, { useState } from 'react';

type GlobalContextType = {
  apiUrl: string;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>; // this is the setUser function type
  loggedIn: boolean; // added
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // added
};

export const GlobalContext = React.createContext<GlobalContextType>(null as any);

export const GlobalProvider: React.FC = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://backend-onboarding-project.herokuapp.com');
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        apiUrl,
        setApiUrl,
        loggedIn, // added
        setLoggedIn, // added
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
