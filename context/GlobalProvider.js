import { createContext, useContext, useState, useEffect, Children } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext
(GlobalContext);

const GlobalProvider = ({Children}) => {
    const [isloggedIn, setisloggedIn] = useState(false)
    const[user, setUser] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    useEffect(()=> {
        getCurrentUser()
        .then((res) => {
            if(res) {
                setisloggedIn(true)
                setUser(res)
            }
            else {
                setisloggedIn(false)
                setUser(null)
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setisLoading(false)
        })
    }, []);

    return(
        <GlobalContext.Provider
        value={{
            isloggedIn,
            setisloggedIn,
            user,
            setUser,
            isLoading
        }}>
            {Children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;