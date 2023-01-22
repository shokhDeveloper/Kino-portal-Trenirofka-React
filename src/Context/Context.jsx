import { useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const [popular, setPopular] = useState([])
    const [names, setName] = useState("")
    const [searchName, setSearchName] = useState("")
    const [activePage, setActivePage] = useState(1)
    return(
        <Context.Provider value={{popular, activePage, setActivePage, setPopular, names, setName, searchName, setSearchName}}>
            {children}
        </Context.Provider> 
    )
}