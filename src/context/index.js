import { useContext } from "react";
import { JobContext } from "./jobContext/JobContext";
import { AuthContext } from "./authContext/AuthContext";
import { UserContext } from "./userContext/UserContext";

export { default as JobContextProvider } from "./jobContext/JobContext";
export { default as AuthContextProvider } from "./authContext/AuthContext";
export { default as UserContextProvider } from './userContext/UserContext'

export const useJobContext = () => useContext(JobContext);
export const useAuthContext = () => useContext(AuthContext);
export const useUserContext = () => useContext(UserContext);
