import React from "react"
import useDarkMode from 'use-dark-mode'
import PropTypes from 'prop-types'

const defaultState = {
  dark: false,
  handleTheme: () => {}
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode(false);

  const handleTheme = () => darkMode.toggle();

  return (
    <ThemeContext.Provider value={{ dark: darkMode.value, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.object
}

export default ThemeContext
export { ThemeProvider }
