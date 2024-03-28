import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const loginHandler = () => {};
  return (
    <AuthContext.Provider value={loginHandler}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
