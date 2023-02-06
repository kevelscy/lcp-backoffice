import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'))

    if (!theme || theme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }

  }, [theme])
 
  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', JSON.stringify('dark'))
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', JSON.stringify('light'))
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }

  return { theme, toggleTheme }
}