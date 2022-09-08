import {useState, useEffect} from 'react'

export function useDarkMode() {
  const [dark, setDark] = useState(false)

  if (typeof window !== 'undefined') {
    dark ? (localStorage.theme = 'dark') : (localStorage.theme = 'light')

    useEffect(() => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      // eslint-disable-next-line
    }, [localStorage.theme])
  }

  function toggle() {
    return setDark((dark) => !dark)
  }

  return {dark, toggle}
}
