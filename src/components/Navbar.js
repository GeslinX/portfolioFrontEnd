import React, { useState, useEffect } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import pdf from '../assets/images/XGcv2023.pdf';

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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  function handleOverflow(){
    document.body.classList.toggle('no-scroll');
  }
  return (
    <Disclosure as="nav" className={state ? "bg-[#f4f2f166] fixed top-4 inset-x-[1rem] backdrop-blur-3xl shadow-[0_2px_10px_-1px_rgba(0,0,0,0.1)] z-10 px-4 rounded-2xl saturate-[200%]" : "bg-transparent fixed top-4 inset-x-[1rem] transition-all ease-in-out duration-500 z-10 px-4 rounded-2xl"}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2.5">
            <div className={state ? "relative flex py-3 lg:py-0 items-center justify-between" : "relative flex py-3 lg:py-0 items-center justify-between border-lightGrey-gx border-b-2 transition-all ease-in-out duration-500"}>
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button onClick={handleOverflow} className="inline-flex z-[2] items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/#" className="font-body text-2xl font-bold text-grey-gx uppercase">Xavier Geslin</Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
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
                    <a href={pdf} target='_blank' rel='noreferrer' className="font-body text-white bg-orange-gx rounded-full px-3 py-2 text-sm font-bold uppercase"><ArrowDownTrayIcon className="inline-block h-6 w-6" aria-hidden="true" /> Parcours Pro</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition duration-600 ease"
            enterFrom="transform translate-y-[-100%] opacity-0"
            enterTo="transform translate-y-[0] opacity-100"
            leave="transition duration-600 ease"
            leaveFrom="transform translate-y-[0] opacity-100"
            leaveTo="transform translate-y-[-100%] opacity-0"
          >
            <Disclosure.Panel static className="bg-grey-gx h-[101vh] mt-[-58px] flex z-[1] relative justify-center items-center lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 flex gap-y-8 justify-center items-center flex-col">
                
                <Transition.Child
                  enter="transition delay-[.3s] duration-800 ease"
                  enterFrom="transform translate-y-[-10%] opacity-0"
                  enterTo="transform translate-y-[0] opacity-100"
                  leave="transition duration-800 ease"
                  leaveFrom="transform translate-y-[0] opacity-100"
                  leaveTo="transform translate-y-[-10%] opacity-0"
                >
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={handleOverflow}
                    className='block text-white mt-4 rounded-md px-3 py-2 text-2xl font-title text-center'
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <a href={pdf} target='_blank' rel='noreferrer' className="text-orange-gx block mt-4 px-3 py-2 text-2xl font-bold font-title"><ArrowDownTrayIcon className="inline-block h-6 w-6" aria-hidden="true" /> Parcours Pro</a>
                </Transition.Child>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
