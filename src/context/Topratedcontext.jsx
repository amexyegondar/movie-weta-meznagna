import React, { createContext, useContext, useState } from 'react';

const Topratedcontext = createContext();

export const TopratedDataProvider = ({ children }) => {
  const [toprateddata, setTopratedData] = useState([
  
  ]);

  return (
    <Topratedcontext.Provider value={{ toprateddata, setTopratedData }}>
      {children}
    </Topratedcontext.Provider>
  );
};

export const useTopratedData = () => useContext(Topratedcontext);