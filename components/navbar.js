import Link from 'next/link'
import {MoonIcon} from '@heroicons/react/24/outline'
import {useDarkMode} from '../hooks/use-darkmode'

export default function Navbar() {
  const {dark, toggle} = useDarkMode()

  return (
    <nav className="bg-[color:var(--light-primary-color)] shadow-md dark:bg-[color:var(--dark-primary-color)] dark:shadow-black">
      <div className="container flex items-center justify-between px-3 py-4 md:mx-auto">
        <Link href="/">
          <a className="rounded p-1 font-extrabold">Where in the world?</a>
        </Link>
        <button
          className="jusify-between flex items-center rounded p-1"
          onClick={toggle}
        >
          <MoonIcon className="mr-2 h-5 w-5" />
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  )
}
