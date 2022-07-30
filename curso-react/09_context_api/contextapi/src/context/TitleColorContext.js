import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {

    switch (action.type) {
        case "RED":
            return { ...state, color: "red", fontSize: "18px" }
        case "BLUE":
            return { ...state, color: "blue", fontSize: "32px" }
        default:
            return state;
    }

}

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple', fontSize: '13px' })

    console.log('o estado atualmente é:', state)

    return <TitleColorContext.Provider value={{ ...state, dispatch }}>
        {children}
    </TitleColorContext.Provider>

}