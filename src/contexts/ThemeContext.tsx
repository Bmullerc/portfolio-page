import { createContext, useContext } from "react"

export enum Theme {
  light = "",
  dark = "dark"
}

export type ThemeContextProps = {
  theme: Theme
  setTheme: (Theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    theme: Theme.dark,
    setTheme: () => console.warn('no theme provider')
  }
)

export const useTheme = () => useContext(ThemeContext);