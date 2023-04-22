import { useState, createContext, useContext } from "react";
import { useNotification } from "../Notification/NotificationService";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    const navigate = useNavigate()
    const { setNotification } = useNotification()
    const login = (username, password) => {
        setUser({ username })
        navigate('/')
        setNotification('success', `Bienvenido ${username}`, 5)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => {
    return useContext(AuthContext)
}