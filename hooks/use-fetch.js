import {createContext, useContext} from 'react'
import useSWR from 'swr'

export const CountryContext = createContext()

export function useFetch() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const {data, error} = useSWR('https://restcountries.com/v3.1/all', fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useCountryContext() {
  return useContext(CountryContext)
}
