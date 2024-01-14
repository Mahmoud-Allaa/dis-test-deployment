'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import phone from '@/public/Shared/phone.png'
import email from '@/public/Shared/email.png'

import whatsapp from '@/public/Shared/whatsapp-icon.png'
import facebook from '@/public/Shared/facebook-icon.png'
import twitter from '@/public/Shared/twitter-icon.png'
import tiktok from '@/public/Shared/tiktok-icon.png'
import instagram from '@/public/Shared/instagram-icon.png'

import Logo from '@/public/Shared/light-logo.svg'
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

  const socials = [
    { img: whatsapp, link: '#' },
    { img: facebook, link: '#' },
    { img: twitter, link: '#' },
    { img: tiktok, link: '#' },
    { img: instagram, link: '#' },
  ]

  return (
    <nav className={`${className}`}>
      <div className="nav-top bg-black flex flex-col md:flex-row items-center justify-between gap-3 text-white px-[24px] md:px-[70px] py-3">
        <div className="contacts flex flex-row max-[640px]:gap-[24px] md:gap-10">
          <div className="flex gap-2 items-center md:gap-3">
            <div className="">
              <Image src={phone} alt='phone' />
            </div>
            <span className='text-[14px]'>00 0392 96 32</span>
          </div>
          <div className="flex gap-2 items-center md:gap-3">
            <div className="">
              <Image src={email} alt='email' />
            </div>
            <span className='text-[14px]'>info@DIS-sa.com</span>
          </div>
        </div>
        <div className="socials">
          <ul className='flex flex-row gap-5'>
            {socials.map((s, i) => (
              <Link key={i} href={s.link} className="">
                <Image className='w-auto' src={s.img} alt='icon' />
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between px-[24px] md:px-[70px] py-3'>
        <Link scroll={false} href={'/' + lng}>
          <article className='w-[81px] sm:w-[120px] h-[42px] sm:h-[62px] relative'>
            <Image
              quality={100}
              src={Logo}
              alt='TDS logo'
              className='h-full w-[auto]'
            />
          </article>
        </Link>
        <div className="md:hidden"><MenuIcon className='md:hidden' onClick={() => setNavOpen(true)} /></div>
        <ul className='nav-list text-black text-[18px]'>
          <NavList lng={lng} t={t} />
          <li>
            <Link
              className={`rounded-lg border text-black px-4 py-3 ${`/${lng}/contact` == path ? 'font-bold' : 'font-normal'} `}
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
              <li className='text-center mt-10'>
                <Link className='text-black' href={`/${lng === 'en' ? 'ar' : 'en'}`}><LanguageIcon /></Link>
              </li>
            </ul>
          </article>
        )}
      </div>
    </nav>
  )
}

export default Navbar
