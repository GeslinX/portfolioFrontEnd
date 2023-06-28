import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const navigation = [
    { name: 'À propos', href: '/#about', current: false },
    { name: 'Services', href: '/#skills', current: false },
    { name: 'Projets', href: '/#projects', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Footer = () => {

    return(
        <div className="bg-lightGrey-gx w-full mt-20">
            <div className="container mx-auto py-8">
                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <Link to="/#" className="font-body text-2xl font-bold text-grey-gx uppercase">Xavier Geslin</Link>
                    </div>
                    <div className="flex flex-row gap-x-2 sm:gap-x-4 mb-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' bg-gray-900 text-white' : 'text-grey-gx rounded-lg transition-all ease-in-out duration-500 hover:bg-[#51504d1a]',
                          'px-4 sm:px-8 py-3 font-medium font-body flex items-center justify-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    </div>
                    <div className="max-w-[1280px] w-full border-t border-[#51504d1a] flex flex-col sm:flex-row pt-8 justify-between pb-20 items-center gap-y-8">
                      <p className="text-sm text-[#505050] text-center sm:text-left">2023 Xavier Geslin. Tous droits réservés.</p>
                      <div className="flex flex-row gap-x-4">
                          <Link to='https://www.linkedin.com/in/xavier-geslin/' target="_blank">
                            <div className="flex text-[#9e9d9b] transition-colors hover:text-grey-gx">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="currentcolor"></path>
                              </svg>
                            </div>
                          </Link>
                          <Link to='https://www.behance.net/xaviergeslin1' target="_blank">
                            <div className="flex text-[#9e9d9b] transition-colors hover:text-grey-gx">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2303 7.37639C11.583 7.86093 11.7593 8.43888 11.7593 9.11491C11.7593 9.80961 11.583 10.37 11.2257 10.7927C11.0249 11.0274 10.7318 11.2446 10.3442 11.4395C10.9326 11.652 11.3763 11.9871 11.6787 12.4448C11.9776 12.9025 12.1282 13.4595 12.1282 14.1133C12.1282 14.7882 11.9566 15.3941 11.6133 15.9289C11.3961 16.2826 11.1229 16.5827 10.796 16.8244C10.4096 17.1104 9.96393 17.306 9.49183 17.3965C8.98977 17.4993 8.44685 17.5495 7.86072 17.5495H2.65918V6.16211H8.23785C9.64595 6.18313 10.6419 6.58711 11.2303 7.37639ZM4.96047 8.13998V10.6526H7.76732C8.26704 10.6526 8.67452 10.558 8.9886 10.37C9.30034 10.1821 9.45797 9.84814 9.45797 9.3706C9.45797 8.83819 9.25131 8.48909 8.83798 8.31745C8.48071 8.19953 8.02535 8.13998 7.47309 8.13998H4.96047ZM4.96047 12.5371V15.5739H7.76382C8.26471 15.5739 8.65584 15.5074 8.93373 15.3731C9.44045 15.1232 9.69265 14.6515 9.69265 13.951C9.69265 13.3567 9.44863 12.9504 8.95824 12.7285C8.6827 12.606 8.2974 12.5406 7.80235 12.5371H4.96047ZM19.1068 9.30055C19.7034 9.56325 20.1938 9.97891 20.5803 10.5464C20.9329 11.0472 21.1594 11.6275 21.2621 12.2872C21.3229 12.6725 21.3462 13.2318 21.3369 13.9592H15.1172C15.1546 14.8033 15.4488 15.3965 16.0116 15.7351C16.3525 15.9464 16.7611 16.0526 17.2434 16.0526C17.7501 16.0526 18.1634 15.9242 18.481 15.6673C18.6561 15.5272 18.8091 15.3346 18.941 15.0882H21.2201C21.1594 15.5868 20.8827 16.0947 20.3935 16.6107C19.6287 17.428 18.558 17.8379 17.1815 17.8379C16.0443 17.8379 15.0425 17.4934 14.175 16.8022C13.304 16.1122 12.8708 14.9878 12.8708 13.4314C12.8708 11.972 13.2631 10.8523 14.0465 10.0735C14.8323 9.29705 15.8481 8.90591 17.0986 8.90591C17.8435 8.90474 18.5125 9.03668 19.1068 9.30055ZM15.7687 11.2025C15.4535 11.5236 15.255 11.9579 15.1732 12.5055H19.0204C18.9795 11.9206 18.7799 11.4781 18.4261 11.1733C18.0677 10.8709 17.6275 10.7203 17.1009 10.7203C16.53 10.7215 16.084 10.8826 15.7687 11.2025ZM14.5965 8.11079H19.5435V6.69336H14.5965V8.11079Z" fill="currentcolor"></path>
                              </svg>
                            </div>
                          </Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
