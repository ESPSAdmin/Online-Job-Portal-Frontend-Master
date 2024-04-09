import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { findUserByEmailId, updateUserPassword } from "../../api/ApiService";
import { toast } from "react-hot-toast";

export const UserContext = createContext();
const UserContextProvider = ({children}) => {
    const [modal, setModal] = useState(1);

   const getUserByEmail = async (emailId) => {
    try {
        const response = await axios.get(findUserByEmailId + `?emailId=${emailId}`);
        const userData = response.data.users;
        // Store user email ID in sessionStorage
        sessionStorage.setItem('emailID', userData[0].emailId);
        
        // Return user data
        return userData;
    } catch (error) {
        console.log(error);
        // Optionally handle errors more gracefully, e.g., show a user-friendly error message
        throw new Error("Failed to fetch user data");
    }
}

    const updatePassword = async(passwordCredential) => {
        try {
            const response = await axios.put(updateUserPassword, passwordCredential);
            toast.success("password updated successfully");
            sessionStorage.removeItem('emailID');
            window.location.href = "/user/login";
            console.log(passwordCredential);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <UserContext.Provider value={{getUserByEmail,modal, setModal, updatePassword}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;