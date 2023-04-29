import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth,isLoggedIn } = useContext(AuthContext);
    //useDebugValue(isLoggedIn, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;