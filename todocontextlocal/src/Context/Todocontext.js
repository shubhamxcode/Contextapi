
import { createContext,useContext } from 'react'
export const Todo=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            compleated:false
        }

    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    ToggleTodo:(id)=>{},
})

export const Todoprovider=Todo.Provider

export const useTodo=()=>{
    return useContext(Todo)
}