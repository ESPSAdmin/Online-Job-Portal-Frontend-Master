import { createContext, useState } from "react";
import { getLoginUser, getUserSignup } from "../../api/ApiService";
import axios from "axios";
import { toast } from "react-hot-toast";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("jwtToken"));
  const [userRole, setUserRole] = useState();

  const loginHandler = async (emailId, password, role) => {
    try {
      const userResponse = await fetch(getLoginUser, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId, password, role }), // Pass credentials directly
      });

      if (userResponse.ok) {
        toast.success("Login successful");
        const userData = await userResponse.json();
        setToken(userData.jwtToken);
        setUserRole(userData.user.role) 
        if (userData.jwtToken !== null) {
          console.log("Login successful");
          if (userData.user.role === "Admin") {
            sessionStorage.setItem("active-admin", JSON.stringify(userData.user));
            sessionStorage.setItem("jwtToken", userData.jwtToken);
          } else if (userData.user.role === "Employer") {
            sessionStorage.setItem("active-employer", JSON.stringify(userData.user));
            sessionStorage.setItem("jwtToken", userData.jwtToken);
          } else if (userData.user.role === "Employee") {
            sessionStorage.setItem("active-employee", JSON.stringify(userData.user));
            sessionStorage.setItem("jwtToken", userData.jwtToken);
          }
        } else {
          console.log("Login failed");
        }
        return userData;
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login");
    }
  };

  const signupHandler = async(data) => {
    try {
      const response = await axios.post(getUserSignup, data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const logoutHandler = () => {
    sessionStorage.clear();
    sessionStorage.removeItem('jwtToken')
    toast.success("Logout successful");
    window.location.href = "/";
  }
 
  return (
    <AuthContext.Provider value={{ loginHandler, token, userRole, logoutHandler, signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
