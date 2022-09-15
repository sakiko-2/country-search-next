import Head from 'next/head'
import {useState} from 'react'
import {useCountryContext} from '../hooks/useFetch'
import Card from '../components/card'
import Search from '../components/search'

export default function Home() {
  const [text, setText] = useState('')
  const data = useCountryContext()

  if (!data) return <div>loading...</div>

  function sortByName(data) {
    return data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
  }

  function handleInput(value) {
    setText(value)
  }

  function filterData(data, text) {
    return text.length > 0
      ? data.filter((item) =>
          item.name.common.toLowerCase().includes(text.toLowerCase()),
        )
      : data
  }

  return (
    <div>
      <Head>
        <title>Country Search App</title>
        <meta name="description" content="Web site to search a country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-3 flex flex-wrap justify-start gap-y-8 md:flex-nowrap md:justify-between">
        <Search handleInput={handleInput} text={text} />
      </div>
      <div className="relative mx-5 mt-9 grid grid-cols-1 gap-10 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          sortByName(filterData(data, text)).map((item, i) => (
            <Card
              code={item.cca3}
              flag={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
              key={i}
            />
          ))}
      </div>
    </div>
  )
}
