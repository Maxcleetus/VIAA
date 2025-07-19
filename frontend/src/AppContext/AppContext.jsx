import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const details = {}

  return (
    <AppContext.Provider value={details}>
      {children}
    </AppContext.Provider>
  );
};