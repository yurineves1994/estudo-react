import { createContext, useReducer } from 'react';

export const SessionContext = createContext()

const session = (state, action) => {
    switch (action.type) {
        case "LOGADO":
            return { ...state, logado: true, name_user: action.payload }
        case "DESLOGADO":
            return { ...state, logado: false, name_user: null }
        default:
            return state;
    }
}

export const SessionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(session, { logado: false, name_user: null })

    console.log('dentro do context', state.logado)
    return <SessionContext.Provider value={{ ...state, dispatch }}>
        {children}
    </SessionContext.Provider>
}