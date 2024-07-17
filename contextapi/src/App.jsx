
import './App.css'
import Usercontextprovider from './Context/Usercontextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  
  return (
    <Usercontextprovider>
    <h1>Everyone has there own journey dont judge them by the knowledge you have and except they also know</h1>
    <Login/>
    <Profile />
    </Usercontextprovider>
  )
}

export default App
