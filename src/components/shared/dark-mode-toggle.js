import React from "react"
import useDarkMode from "use-dark-mode"
import Toggle from 'react-toggle'
import './Toggle.css'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  const handleTheme = () => darkMode.toggle();

  return (
    <div className="container-toggle">
      <Toggle
        onChange={handleTheme}
        icons={{
          checked: <FaSun />,
          unchecked: <FaMoon />
        }}
        defaultChecked={true} />
    </div>
  )
}

export default DarkModeToggle;