import { createContext,useContext } from "react";


const Themecontext=createContext({
    themeMode: "light",
    darktheme:()=>{},
    lighttheme:()=>{},
})
export default Themecontext 

 export const ThemeProvider=Themecontext.Provider


 export function usetheme(){
    return useContext(Themecontext)
 }