import Link from 'next/link'

export default function Card({code, flag, name, population, region, capital}) {
  return (
    <Link
      href={`/country/${code}`}
      className="justify center relative flex h-full flex-col drop-shadow-lg dark:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] dark:focus:rounded-md dark:focus:outline-0 dark:focus:ring dark:focus:ring-indigo-500 dark:focus:ring-offset-0"
    >
      <div>
        <img
          variant="top"
          src={flag}
          className="overflow-hidden rounded-t-md border border-b-gray-300 dark:border-[color:var(--dark-primary-color)]"
          alt={`flag of ${name}`}
        />
        <div className="flex flex-1 flex-col rounded-b-md bg-[color:var(--light-primary-color)] p-5 dark:bg-[color:var(--dark-primary-color)]">
          <h1 className="mb-2 text-xl font-extrabold">{name}</h1>
          <div className="normal-nums">
            <span className="mr-1 font-semibold">Population:</span>
            {population.toLocaleString()}
          </div>
          <div>
            <span className="mr-1 font-semibold">Region:</span>
            {region}
          </div>
          <div>
            <span className="mr-1 font-semibold">Capital:</span>
            {capital || '-'}
          </div>
        </div>
      </div>
    </Link>
  )
}
