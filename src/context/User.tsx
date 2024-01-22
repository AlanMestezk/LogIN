import { ReactNode, createContext, useState } from "react";

interface UserProviderProps{
    children : ReactNode
}

type UserContextData = {

    name    ?: string | any
    surname ?: string | any
    change   : (name: string, surname: string)=>void
    deleteName   : () => void
}

export const UserContext = createContext({}as UserContextData)

export const UserProvider = ({children}: UserProviderProps)=>{

    const [name,       setName] = useState<string | any>("Al")
    const [surname, setSurname] = useState<string | any>("Go")

    const change = (name: string, surname: string)=>{

        setName(name)
        setSurname(surname)
    }

    const deleteName = ()=>{

        setName('')
        setSurname('')
    }


    return(
        <UserContext.Provider 
            value={{name, surname,change, deleteName}}
        >
            {children}
        </UserContext.Provider>
    )
    
}


