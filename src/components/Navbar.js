import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'À propos', href: '/#about', current: false },
  { name: 'Services', href: '/#skills', current: false },
  { name: 'Projets', href: '/#projects', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [state, setScroll] = useState(false);
    const changeValueOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      if(scrollValue > 0){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    }
    window.addEventListener('scroll',changeValueOnScroll);
  return (
    <Disclosure as="nav" className={state ? "bg-white/70 sticky top-0 backdrop-blur-lg shadow-[0_2px_10px_-1px_rgba(0,0,0,0.1)] z-10" : "bg-transparent sticky top-0 transition-all ease-in-out duration-500 z-10"}>
      {({ open }) => (
        <>
          <div className="container mx-auto px-2.5">
            <div className={state ? "relative flex py-3 sm:py-0 items-center justify-between" : "relative flex py-3 sm:py-0 items-center justify-between border-lightGrey-gx border-b-2 transition-all ease-in-out duration-500"}>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <a href="#banner" className="font-body text-2xl font-bold text-grey-gx uppercase">Xavier Geslin</a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className={state ? "flex space-x-4 items-center" : "flex space-x-4 items-center mb-[-2px]"}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' bg-gray-900 text-white' : 'text-grey-gx hover:text-orange-gx hover:font-bold hover:border-orange-gx hover:border-b-2 transition-all ease-in-out duration-500',
                          'px-3 py-2 text-sm font-regular font-body uppercase h-16 flex items-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <a href="#contact" className="font-body text-white bg-orange-gx hover:text-white rounded-full px-3 py-2 text-sm font-bold uppercase">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' bg-gray-900 text-white' : 'text-grey-gx hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-bold font-body uppercase'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold font-body uppercase">Contact</a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}