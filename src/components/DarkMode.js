import { dark } from "@mui/material/styles/createPalette";
import React from "react";
import {useState} from "react"
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';



function DarkMode() {
    const [themeMode, setThemeMode] = useState("light")
    let clickedClass= "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme;

    if(localStorage){
        theme = localStorage.getItem("theme")
    }

    if(theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    }
    else {
        body.classList.add(lightTheme)
    }

    const switchTheme = e => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "light")
            theme=lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "dark")
            theme=darkTheme

        }
        setThemeMode(theme)
    }
    


    return ( 
    <button 
        className={theme==="dark" ? clickedClass:""} 
        id="darkMode" 
        onClick={e=> switchTheme(e)}
        >
            {themeMode === "light" || theme=== "light" ? (
                <Brightness3Icon />
            ) : (
                <LightModeIcon />
            )}
         </button>
    )
}

export default DarkMode