import Head from 'next/head'
import {useContext} from 'react'
import {CountryContext} from '../components/wrapper'
import Card from '../components/card'

export default function Home() {
  const data = useContext(CountryContext)

  function sortByName(data) {
    return data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
  }

  return (
    <div>
      <Head>
        <title>Country Search App</title>
        <meta name="description" content="Web site to search a country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-5 mt-9 grid grid-cols-1 gap-10 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          sortByName(data).map((item, i) => (
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
