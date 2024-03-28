import { useContext } from "react";
import { JobContext } from "./jobContext/JobContext";
import { AuthContext } from "./authContext/AuthContext";

export { default as JobContextProvider } from "./jobContext/JobContext";
export { default as AuthContextProvider } from "./authContext/AuthContext";

export const useJobContext = () => useContext(JobContext);
export const useAuthContext = () => useContext(AuthContext);
