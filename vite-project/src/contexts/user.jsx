import { createContext, useState } from "react";

function getUserFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem("user"));    
    } catch (error) {
        console.log(error);

        return null;
    }
}

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getUserFromLocalStorage());
    function login(newUser) { // устанавливает пользователя 
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));    
    } 
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider> 
    )
}