import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: () => {},
  setUser: () => {},
});

export default StoreContext;