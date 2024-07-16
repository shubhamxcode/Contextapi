
import './App.css'
import Usercontextprovider from './Context/Usercontextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  
  return (
    <Usercontextprovider>
    <h1>DO WHAT YOU LOVE</h1>
    <Login/>
    <Profile />
    </Usercontextprovider>
  )
}

export default App
