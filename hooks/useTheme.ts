import { useCallback, useState } from 'react'

export type ThemeType = 'light' | 'dark'

const useTheme = (defaultTheme?: ThemeType): [ThemeType, () => void] => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme || 'light')

  const toggleTheme = useCallback(
    () => setTheme((state) => (state === 'light' ? 'dark' : 'light')),
    [],
  )

  return [theme, toggleTheme]
}

export { useTheme }
