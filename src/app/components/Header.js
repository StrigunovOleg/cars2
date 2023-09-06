'use client'

import { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { text: 'Популярные модели', href: '#popcars' },
    { text: 'Все модели', href: 'https://t.me/upgrade_autovl' },
    { text: 'Этапы', href: '#steps' },
    { text: 'Контакты', href: '#footer' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed flex z-50 items-center justify-between top-0 left-0 w-full bg-stone-900 h-14 px-4 md:px-6">
      <a href="/">
        <Image src="/logoMain.png" width={175} height={25} alt="Logo" />
      </a>

      <nav className="hidden md:flex items-center space-x-4">
        {links.map((link, index) => (
          <div className="" key={index}>
            <a className="text-md mx-2 text-white hover:text-gray-300" href={link.href}>
              {link.text}
            </a>
          </div>
        ))}
      </nav>

      <div className="md:hidden px-1 border-2 rounded-md">
        <button
          className="text-white mt-1 transition-all hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-14 left-0 right-0 bg-stone-900 py-2 px-4">
          {links.map((link, index) => (
            <div className="link-wrapper" key={index}>
              <a
                className="block text-lg text-white hover:text-gray-300 py-2"
                href={link.href}
                onClick={toggleMenu}
              >
                {link.text}
              </a>
            </div>
          ))}
        </nav>
      )}
      <div className="flex h-full items-center justify-end">
        <div className="text-white mr-5 md:inline-block hidden">
          <div className=' flex hover:underline transition underline-offset-2 items-center'><a className='text-lg' href='tel:+79089921879'> +7 908 992-18-79 </a><a className="rounded-xl mx-2 my-2" href="https://t.me/upgrade_autovl">
                  <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xmlSpace="preserve">
<circle fill="#59AAE7" cx="256" cy="256" r="256"/>
<path fill="#3D9AE3" d="M256,0c-11.317,0-22.461,0.744-33.391,2.167C348.216,18.53,445.217,125.933,445.217,256
	s-97.002,237.47-222.609,253.833C233.539,511.256,244.683,512,256,512c141.385,0,256-114.616,256-256S397.385,0,256,0z"/>
<path fill="#FCFCFC" d="M164.689,311.141L82.127,269.86c-2.263-1.132-2.285-4.353-0.038-5.516L395.75,102.105
	c2.304-1.192,4.964,0.811,4.456,3.355l-54.004,270.017c-0.385,1.927-2.446,3.011-4.253,2.237l-73.393-31.453
	c-0.879-0.377-1.884-0.326-2.721,0.139l-94.839,52.688c-2.062,1.145-4.597-0.345-4.597-2.705v-82.474
	C166.4,312.736,165.738,311.665,164.689,311.141z"/>
<path fill="#D8D7DA" d="M200.31,338.967l-0.513-82.428c-0.003-0.528,0.27-1.018,0.72-1.293l133.899-81.798
	c1.518-0.927,3.106,1.083,1.852,2.345l-101.9,102.624c-0.112,0.114-0.207,0.244-0.278,0.387l-17.43,34.858l-13.509,25.988
	C202.426,341.045,200.32,340.538,200.31,338.967z"/>
</svg>
                  </a>
                  
          <a className="mx-2 my-2" href="https://wa.me/+79089921879">
                  <svg height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 58 58" xmlSpace="preserve">
<g>
	<path fill="#2CB742" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
		S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
	<path fill="#FFFFFF" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
		c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
		c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
		c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
		c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
</g>
</svg>
                  </a>
                  </div>
        </div>
      <Button text="Оставить заявку" />
      </div>
    </header>
  );
}
