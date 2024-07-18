import { createContext,useContext } from "react";


const Themecontext=createContext({
    Thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{},
})
export default Themecontext 

 export const Themeprovider=Themecontext.Provider


 export function usetheme(){
    return useContext(Themecontext)
 }