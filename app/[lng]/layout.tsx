import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import '../styles/globals.scss'
import Footer from '@/components/Shared/Footer'
import { AnimatePresence } from 'framer-motion'
import '@/app/styles/global.css'

import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { useTranslation } from '../i18n'
import Link from 'next/link'
import Navbar from '@/components/Shared/Navbar/Navbar'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
})

export const metadata: Metadata = {
  title: 'DIS - Digital Information Solutions Saudi Corp. ',
  description:
    'Multi national company with offices at USA, Egypt, and Saudi Arabia. We provide software applications solutions and business reorganization consultancy',
  // description:
  //   'We are a multi national company with offices at USA, Egypt, and Saudi Arabia. Our team provides software applications solutions, business reorganization consultancy and application development services to help clients in different industries growing their businesses and developing their products. We work closely with clients as partners rather than just service providers to ensure collaboration and harmony in every step of the process. YDS strives to give their clients a competitive edge over their competitors',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: any
}) {
  const { t } = await useTranslation(lng, 'footer')
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={`font-normal text-lg bg-[#EDEDED] overflow-x-hidden min-h-screen scroll-smooth`}
      >
        <section className='relative'>
          <Navbar className='' lng={lng} />
          {children}
          <Footer lng={lng} />
        </section>
      </body>
    </html>
  )
}
