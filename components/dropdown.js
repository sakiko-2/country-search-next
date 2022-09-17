import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({options, handleSelect, region}) {
  return (
    <Menu as="div" className="relative z-40 inline-block w-60">
      <Menu.Button className="flex w-60 items-center justify-between rounded-md border border-gray-300 bg-[color:var(--light-primary-color)] px-4 py-3 text-sm font-medium text-[color:var(--light-text-color)] shadow-sm hover:bg-gray-50 dark:border-[color:var(--dark-background-color)] dark:bg-[color:var(--dark-primary-color)] dark:text-[color:var(--dark-text-color)] dark:hover:bg-slate-700 dark:focus:border-indigo-500 dark:focus:outline-0">
        <span className="grow-1 flex">
          Filter by Region
          {region && `:  ${region}`}
        </span>
        <ChevronDownIcon
          className="-mr-1 ml-2 flex h-5 w-5 grow-0"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-1 w-60 origin-top-right rounded-md bg-[color:var(--light-primary-color)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-[color:var(--light-text-color)] dark:bg-[color:var(--dark-primary-color)] dark:shadow-black">
          <div className="py-1">
            {options.map((item, i) => (
              <Menu.Item onClick={() => handleSelect(item)} key={i}>
                {({active}) => (
                  // eslint-disable-next-line
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? 'bg-gray-100 text-[color:var(--light-text-color)] dark:bg-[color:var(--dark-background-color)] dark:text-[color:var(--dark-text-color)]'
                        : 'text-gray-700 dark:bg-[color:var(--dark-primary-color)] dark:text-[color:var(--dark-text-color)]',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
