import { useContext } from "react";
import { UserContext } from "../contexts/User";

// создаем функцию useUser для возвращения контекста  
export function useUser() {
    return useContext(UserContext)
}