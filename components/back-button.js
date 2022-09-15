import {useRouter} from 'next/router'
import {ArrowLeftIcon} from '@heroicons/react/24/solid'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center rounded-md border bg-[color:var(--light-primary-color)] px-9 py-1.5 drop-shadow-lg dark:border-[color:var(--light-text-color)] dark:bg-[color:var(--dark-primary-color)] dark:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] dark:focus:border-indigo-500 dark:focus:outline-0"
    >
      <ArrowLeftIcon className="mr-1.5 -ml-1.5 h-5 w-5" />
      Back
    </button>
  )
}
