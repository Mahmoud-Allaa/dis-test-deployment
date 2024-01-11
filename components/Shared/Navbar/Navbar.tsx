'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/Shared/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavList from './NavList'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = ({ lng = 'en', className = '' }) => {
  const { t } = useTranslation(lng, 'client-page')
  const [navOpen, setNavOpen] = useState(false)
  const path = usePathname()
  console.log(path);

  return (
    <nav className={`nav bg-transparent ${className}`}>
      <div className='nav-container'>
        <Link scroll={false} href={'/' + lng}>
          <article className='w-[81px] sm:w-[120px] h-[42px] sm:h-[62px] relative'>
            <Image
              quality={100}
              src={Logo}
              alt='TDS logo'
              className='center w-[80px]'
            />
          </article>
        </Link>
        <MenuIcon className='md:hidden' onClick={() => setNavOpen(true)} />
        <ul className='nav-list'>
          <NavList lng={lng} t={t} />
          <li>
            <Link
              className={`rounded-lg bg-white text-black px-4 py-3 ${`/${lng}/contact` == path ? 'text-secondary' : ''} `}
              href={`/${lng}/contact`}
            >
              {t('Contact Us')}
            </Link>
          </li>
          <li>
            <Link className='text-black' href={`/${lng === 'en' ? 'ar' : 'en'}`}><LanguageIcon /></Link>
          </li>
        </ul>
        {navOpen && (
          <article
            className={`bg-[#0F4B9E] text-[#fff] w-full h-screen pt-[32px] px-[40px] absolute left-0 z-[100] ${navOpen ? 'top-0' : 'top-[-10000px]'
              }`}
          >
            <div className='flex flex-row justify-between mb-3'>
              <Link href='/'>
                <Image
                  className='w-[81px]'
                  src={Logo}
                  alt='Logo'
                />
              </Link>
              <CloseIcon className='w-[24px] h-[24px]' onClick={() => setNavOpen(false)} />
            </div>
            <hr />
            <ul className='my-3'>
              <NavList onClick={() => setNavOpen(false)} lng={lng} t={t} />
              <li className={`/${lng}/contact` == path ? 'text-secondary' : 'text-black'}>
                <span onClick={() => setNavOpen(false)}>
                  <Link scroll={false} href={`/${lng}/contact`}>
                    {t('Contact Us')}
                  </Link>
                </span>
              </li>
            </ul>
          </article>
        )}
      </div>
    </nav>
  )
}

export default Navbar
