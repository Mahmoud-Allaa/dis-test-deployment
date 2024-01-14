'use client'
import { useTranslation } from '@/app/i18n/client'
import logo from '@/public/Shared/dark-logo.svg'
import Image from 'next/image'

import whatsapp from '@/public/Shared/whatsapp-icon.png'
import facebook from '@/public/Shared/facebook-icon.png'
import twitter from '@/public/Shared/twitter-icon.png'
import tiktok from '@/public/Shared/tiktok-icon.png'
import instagram from '@/public/Shared/instagram-icon.png'
import Link from 'next/link'

const Footer = ({ lng = 'en' }) => {
  const { t } = useTranslation(lng)

  const socials = [
    { img: whatsapp, link: '#' },
    { img: facebook, link: '#' },
    { img: twitter, link: '#' },
    { img: tiktok, link: '#' },
    { img: instagram, link: '#' },
  ]

  return (
    <footer className='footer'>
      <div className="">
        <div className=""><Image className='h-[80px] w-[auto] mx-auto' src={logo} alt='logo' /></div>
        <nav>
          <ul className='flex flex-row gap-5 justify-center mt-5 text-[14px]'>
            <li><Link href={`/${lng}/`}>Home</Link></li>
            <li><Link href={`/${lng}/about`}>About</Link></li>
            <li><Link href={`/${lng}/referances`}>Referances</Link></li>
            <li><Link href={`/${lng}/contact`}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <p className="mt-[32px] text-[14px] text-center">© 2023 DIS-SA, Your Success Partner.</p>

      <div className="bottom-footer flex flex-row items-center justify-between gap-5 md:gap-[70px] mt-10">
        <div className="h-[50px] rounded-tr-[100px] bg-[#1A9FD3] flex-1"></div>
        <div className="flex flex-row gap-5">
          {socials.map((s, i) => (
            <Link key={i} href={s.link} className="">
              <Image className='w-auto' src={s.img} alt='icon' />
            </Link>
          ))}
        </div>
        <div className="h-[50px] rounded-tl-[100px] bg-[#1A9FD3] flex-1"></div>
      </div>
    </footer>
  )
}


export default Footer
