import { useState } from 'react'
import './App.css'
import { Todoprovider } from './Context'
import { createContext } from 'react'
function App() {

  const [todos, settodos] = useState([])
  const addTodo=(todo)=>{
    settodos((prev)=>[{id: (Math.random()),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    settodos((prev)=>prev.map((prevtodo)=> prevtodo.id===id?todo:prevtodo))
  }
  const deleteTodo=(id)=>{
    settodos((prev) => prev.filter((prevtodo)=> prevtodo.id !== id) )
  }
  const ToggleTodo=(id)=>{
    settodos((prev)=>prev.map((prevtodo)=>prevtodo===id ? {...prevtodo,compleated:!prevtodo.compleated}:prevtodo))
  }

  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0) {
      settodos(todos)
    }

  }, [])
  
  return (
    <Todoprovider value={{todos,addTodo,deleteTodo,updateTodo,ToggleTodo}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
