import { useEffect, useState } from 'react'
import Themecontext, { Themeprovider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/Themebtn'

function App() {
  const [Thememode, setThememode] = useState("light")
  const darktheme=()=>{
    setThememode("dark")
  }
  const lighttheme=()=>{
    setThememode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add('Thememode')
  }, [Thememode])
  

  return (
  
    <Themeprovider value={{Thememode,darktheme,lighttheme}}>
<div className="text-center flex">
                <div className="w-full">`
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
  </div>
  </Themeprovider>
  )
}

export default App
