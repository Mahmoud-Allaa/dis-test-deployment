'use client'
import { useTranslation } from '@/app/i18n/client'
import logo from '@/public/Shared/logo.png'
import Image from 'next/image'

const Footer = ({ lng = 'en' }) => {
  const { t } = useTranslation(lng)

  return (
    <footer className='footer'>
      <div className="">
        <div className=""><Image className='w-[70px] md:w-[100px] mx-auto' src={logo} alt='logo' /></div>
        <nav>
          <ul className='flex flex-row gap-5 justify-center mt-5 '>
            <li>About</li>
            <li>Success Stories</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <p className="mt-[32px] text-[16px] text-center">© 2023 DIS-SA, Your Success Partner.</p>
    </footer>
  )
}


export default Footer
