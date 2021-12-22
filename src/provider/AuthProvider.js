import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [token, setToken] = useState(
        sessionStorage.getItem("token") || null
    );

    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    );

    useEffect(() => {
        try {
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
        }
    }, [user, token]);

    const contextValue = {
        user,
        token,
        setToken(token) {
            setToken(token);
        },
        setUser(usr) {
            setUser(usr);
        },
        logout() {
            setToken(null);
            setUser(null);
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
        },
        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider;