import React, { createContext } from "react";

export const Condi=createContext()

export const Condicontext =({children})=>{
    const [nav,setNav]=React.useState(false)
return(
    <Condi.Provider value={{nav,setNav}}>{children}</Condi.Provider>
)
}