import React, {createContext, useState, useContext} from 'react';

const CountContext = createContext()
export const useCounter = () => useContext(CountContext)

export const CountContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(pre => pre+1)
    }
    const decrement = () => {
        setCount(pre => pre-1)
    }
    const value = {
        count,
        increment,
        decrement
    }
    return(
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    )
}