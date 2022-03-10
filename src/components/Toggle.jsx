import React,{useContext} from "react"
import { ThemeContext } from "./themeContext"
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

export const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext)
  
    function isDark() {
      return theme === 'dark'
    }
  
    function toggleTheme(e) {
      setTheme(e.target.checked ? 'dark' : 'light')
    }
  
    return (
      <label className="justify-center items-center p-1 dark:text-white">
        <input 
          type="checkbox"
          checked={isDark()}
          onChange={e => toggleTheme(e)}
          className='items-center justify-center ml-8 dark:text-white appearance-none'
        />
        {theme==="dark"? (
          <img src={sun}  className='w-14 h-16 cursor-pointer justify-between items-center'  alt="light" />
        ):(
          <img src={moon}  className='w-10 h-10 cursor-pointer' alt="dark" />
        )}
        {/* {theme==="dark"? (
          <img src={logo}  className='w-full'  alt="light" />
        ):(
          <img src={logo1}  className='w-full' alt="dark" />
        )} */}

        
      </label>
    )
    
  }