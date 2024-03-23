import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
  
  ]);

  return (
    <FavoriteContext.Provider value={{ data, setData }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useData = () => useContext(FavoriteContext);