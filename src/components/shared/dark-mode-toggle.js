import React from "react"
import Toggle from 'react-toggle'
import './Toggle.css'
import { FaMoon, FaSun } from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'

const DarkModeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="container-toggle">
          <Toggle
            onChange={theme.handleTheme}
            icons={{
              checked: <FaMoon />,
              unchecked: <FaSun />
            }}
            defaultChecked={theme.dark} />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default DarkModeToggle;