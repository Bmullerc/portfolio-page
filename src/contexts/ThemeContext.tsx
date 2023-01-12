import { createContext } from "react"

export enum Theme {
  light = "",
  dark = "dark"
}

type ThemeContextProps = {
  theme: Theme
  setTheme: (Theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    theme: Theme.dark,
    setTheme: () => Theme
  }
)