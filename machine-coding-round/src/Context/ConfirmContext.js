import { createContext, useState } from "react";

export const ConfirmContext = createContext(null);

export const ConfirmProvider = ({children}) => {
  const [confirm, setConfirm] = useState({
    prompt: "",
    isOpen: false,
    proceed: null,
    cancel: null
  })

  const changeConfirmState = (state) => {
    setConfirm(prevConfirm => ({...prevConfirm, ...state}));
  }

  return <ConfirmContext.Provider value={[confirm, changeConfirmState]}>{children}</ConfirmContext.Provider>
}