import React, { useState } from 'react';

type GlobalContextType = {
  apiUrl: string;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>; // this is the setUser function type
  loggedIn: boolean; // added
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // added
  // uuid: string;
  // setUuid: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = React.createContext<GlobalContextType>(null as any);

export const GlobalProvider: React.FC = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://backend-onboarding-project.herokuapp.com');
  const [loggedIn, setLoggedIn] = useState(false);
  // const [uuid, setUuid] = useState;

  return (
    <GlobalContext.Provider
      value={{
        apiUrl,
        setApiUrl,
        loggedIn, // added
        setLoggedIn, // added
        // uuid,
        // setUuid,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
