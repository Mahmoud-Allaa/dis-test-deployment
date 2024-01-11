'use client'
import { useTranslation } from '@/app/i18n/client'
import logo from '@/public/Shared/logo.png'
import Image from 'next/image'

const Footer = ({ lng = 'en' }) => {
  const { t } = useTranslation(lng)

  return (
    <footer className='footer'>
      <div className="flex flex-row items-center justify-between">
        <div className=""><Image className='w-[100px]' src={logo} alt='logo' /></div>
        <nav>
          <ul className='flex flex-row gap-5'>
            <li>About</li>
            <li>Success Stories</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <p className="mt-[32px] text-[16px]">© 2023 DIS-SA, Your Success Partner.</p>
    </footer>
  )
}


export default Footer
