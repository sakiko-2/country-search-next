import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function Search({handleInput, text}) {
  return (
    <label className="relative w-screen rounded-md md:w-2/5">
      <MagnifyingGlassIcon className="pointer-events-none absolute left-2 h-7 w-7 translate-y-1/3 transform px-1 text-[color:var(--dark-gray)] focus:outline-0 dark:text-slate-400" />
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-12 text-neutral-900 text-[color:var(--dark-gray)] placeholder:text-neutral-400 focus:border-indigo-500 dark:border-[color:var(--dark-background-color)] dark:bg-[color:var(--dark-primary-color)] dark:text-[color:var(--dark-text-color)] dark:placeholder:text-slate-400 dark:focus:bg-slate-700 dark:focus:outline-0 dark:focus:ring-0"
        placeholder="Search for a country..."
        onChange={(e) => handleInput(e.target.value)}
        value={text}
      />
    </label>
  )
}
