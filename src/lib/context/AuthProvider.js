 
import React, { createContext, useState }  from 'react';
import session from "../authstore"

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loadingToast, setloadingToast] = useState(false);

    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    function setToken(token){
        session.setIdToken(token);
    }
    function setProfile(data){
        session.setProfile(data);
    }
    function getProfile(){
       return session.getProfile();
    }
    function isLoggedIn(){
        return session.get_token()?true:false;
    }
    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist ,setToken,setProfile,getProfile,isLoggedIn, loadingToast,setloadingToast}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;