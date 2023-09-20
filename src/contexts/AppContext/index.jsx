import { createContext, useState } from 'react';
import { inicialState } from './data';

export const GlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ( props ) => {
  const [contextState, setState] = useState(inicialState);

  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {/* eslint-disable-next-line */}
      {props.children}
    </GlobalContext.Provider>
  );
};
