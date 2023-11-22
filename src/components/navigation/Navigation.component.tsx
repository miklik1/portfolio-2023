import { Link } from 'react-scroll';
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ReactComponent as Logo } from '../../assets/logo.svg';

const navigation = [
  { name: 'Projects', href: 'projects', current: false },
  { name: 'About me', href: 'aboutme', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800 font-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-red focus:text-blue focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo className='w-36' />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.name} smooth={true} duration={500}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-blue' : 'hover:text-red',
                          'rounded-md px-1 py-2 text-sm md:px-5 md:text-base z-10'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden w-full">
              <div className="flex flex-row align-center gap-y-4 justify-center w-full px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.name} smooth={true} duration={500}>
                    <Disclosure.Button
                      as="button" // Ensure the Disclosure.Button is rendered as a button
                      className={classNames(
                        item.current ? 'bg-gray-900 text-blue' : 'hover:text-red',
                        ' underline decoration-4 decoration-red px-3 py-2 text-base font-medium mx-auto relative'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>

          </Transition>
        </>
      )}
    </Disclosure>
  )
}
