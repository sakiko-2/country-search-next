import {createContext} from 'react'
import useSWR from 'swr'

export const CountryContext = createContext()

export function Wrapper({children}) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const {data, error} = useSWR('https://restcountries.com/v3.1/all', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <CountryContext.Provider value={data}>{children}</CountryContext.Provider>
  )
}
