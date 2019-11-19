import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('random');

  return(
    <AppContext.Provider value={[count, setCount, value, setValue]}>
      {props.children}
    </AppContext.Provider>
  );
}