# veg_app
 import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [inventory, setInventory] = useState([
    { id: 1, crop: 'Organic Tomatoes', qty: '450kg', shelfLife: 8, status: 'At Risk', coldChain: 'Normal' },
    { id: 2, crop: 'Alphonso Mangoes', qty: '1200kg', shelfLife: 4, status: 'At Risk', coldChain: 'Delayed' },
  ]);
  const [impact, setImpact] = useState({ saved: 2450, co2: 120, recovered: 8400 });

  return (
    <AppContext.Provider value={{ user, setUser, inventory, setInventory, impact, setImpact }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
