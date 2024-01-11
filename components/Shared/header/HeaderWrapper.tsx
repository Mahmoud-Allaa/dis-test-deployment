'use client'
import SectionHeader from './SectionHeader'
import { usePathname } from 'next/navigation'

const HeaderWrapper = ({ lng }: { lng: string }) => {
  type validPath =
    | '/about'
    | '/stories'
    | '/solutions'
    | '/products'
    | '/contact'
  const path = usePathname()
  return <SectionHeader lng={lng} varient={`${path as validPath}`} />
}

export default HeaderWrapper
