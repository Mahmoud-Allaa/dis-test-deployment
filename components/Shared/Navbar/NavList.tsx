'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// the contact navElemnet is written by its own
// cause it has some special styling
const navData = [
  { name: 'About US', path: '/about' },
  // { name: 'Solutions', path: '/solutions' },
  { name: 'Referances', path: '/referances' },
]

const NavList = ({ onClick = () => { }, lng = 'en', t }: any) => {
  const path = usePathname()

  return (
    <>
      {navData.map((e) =>
        <li className={`/${lng}${e.path}` == path ? 'font-bold' : 'font-normal'} key={e.name}>
          <span onClick={onClick}>
            <Link scroll={false} href={'/' + lng + e.path}>
              {t && t(e.name)}
              {/* {e.name} */}
            </Link>
          </span>
        </li>
      )}
    </>
  )
}

export default NavList
