import Image from 'next/image'
import {useCountryContext} from '../../hooks/useFetch'
import BackButton from '../../components/back-button'
import ButtonLink from '../../components/button-link'

export default function Detail({detailData}) {
  const data = useCountryContext()

  if (!data) return <div>loading...</div>

  function name(code) {
    return data.find((item) => item.cca3 === code).name.common
  }

  function formatArray(arr) {
    return [
      ...new Set(
        arr.map((item, i) => (i + 1 === arr.length ? item : `${item}, `)),
      ),
    ]
  }

  function formatNativeName(arr) {
    let uniq = [...new Set(Object.values(arr).map((item) => item.official))]
    return uniq.map((item, i) => (uniq.length - 1 !== i ? `${item}, ` : item))
  }

  return (
    <>
      <div className="mx-3 mt-3 mb-9 sm:mx-0">
        <BackButton />
      </div>

      {detailData && (
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
          <div className="relative mx-3 h-[40vh] max-h-[70vh] sm:mx-0 sm:h-[50vh] lg:mr-5">
            <Image
              src={detailData.flags.svg}
              className="drop-shadow-lg"
              alt="flag"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-start px-3 py-5 sm:px-6">
            <h1 className="my-4 text-3xl font-extrabold">
              {detailData.name.common}
            </h1>
            <div className="flex w-full flex-wrap text-base md:mb-10">
              <div className="my-2 w-full pr-3 md:w-1/2">
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Native Name:</span>
                  {detailData.name.nativeName
                    ? formatNativeName(detailData.name.nativeName)
                    : '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Population:</span>
                  {detailData.population.toLocaleString() || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Region:</span>
                  {detailData.region || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Sub Region:</span>
                  {detailData.subregion || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Capital:</span>
                  {detailData.capital || '-'}
                </p>
              </div>

              <div className="my-3 w-full md:my-2 md:w-1/2">
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Top Level Domain:</span>
                  {detailData.tld || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Currencies:</span>
                  {detailData.currencies
                    ? Object.values(detailData.currencies).map(
                        (item) => item.name,
                      )
                    : '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Languages:</span>
                  {detailData.languages
                    ? formatArray(Object.values(detailData.languages).sort())
                    : '-'}
                </p>
              </div>
            </div>
            <div className="my-3">
              <span className="mr-2 block font-semibold leading-relaxed md:inline-block">
                Border Countries:
              </span>
              {detailData.borders
                ? detailData.borders.map((item, i) => (
                    <ButtonLink item={item} name={name} key={i} />
                  ))
                : '-'}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()

  const paths = data.map((country) => ({
    params: {code: `${country.cca3}`},
  }))

  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()

  const detailData = data.find(
    (country) => `${country.cca3}` === `${params.code}`,
  )
  return {
    props: {detailData},
  }
}
