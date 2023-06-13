/* eslint-disable import/no-cycle */
import { useContext } from 'react'
import { ThemeContext } from '.'

const THEMES = {
  dark: {
    backgroundColor: '#000'
  },
  light: {
    backgroundColor: '#fff'
  }
}
export const useTheme = () => {
  const currentTheme = useContext(ThemeContext)

  return THEMES[currentTheme]
}