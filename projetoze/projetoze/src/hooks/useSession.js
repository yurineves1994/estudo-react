import { useContext } from "react";

import { SessionContext } from "../context/SessionContext";

export const useSession = () => {
    const context = useContext(SessionContext)

    if (!context) return console.log('não existe esse contexto!')

    return context;
}