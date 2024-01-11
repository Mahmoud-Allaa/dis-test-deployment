import Link from 'next/link'
import Image from 'next/image'

// backgroud images
import Fade from '@/public/Shared/fade.jpg'
import contactLg from '@/public/Shared/contactMapLg.png'
import contactSm from '@/public/Shared/contactMapSm.png'
// imgs
import tds from '@/public/Shared/tds.png'
import tdsVarient from '@/public/Shared/tds-varient.png'
import tdsCropped from '@/public/Shared/tds-cropped.png'
import tdsCroppedVarient from '@/public/Shared/tds-cropped-varient.png'
// icons
import Home from '@/public/Shared/home.svg'
import navArrow from '@/public/Shared/navArrow.svg'
import Navbar from '@/components/Shared/Navbar/Navbar'

const SectionHeader = ({
  varient,
  lng,
}: {
  varient: '/about' | '/stories' | '/solutions' | '/products' | '/contact'
  lng: string
}) => {
  const isContact = varient == '/contact'
  const headers = {
    '/about': 'About',
    '/stories': 'Success Stories',
    '/solutions': 'Solutions',
    '/products': 'Products',
    '/contact': 'Contact US',
  }
  return (
    <header
      className={`${isContact ? 'bg-contact-gradient' : 'bg-black-gradient'
        } relative overflow`}
    >
      {/* background */}
      <Image
        src={Fade}
        alt='background'
        style={{ objectFit: 'cover' }}
        sizes='100vw'
        fill
        className={`absolute -z-50 ${isContact && 'hidden'}`}
      />

      <Navbar lng={lng} />
      <section className='relative flex justify-between max-w-[1440px] px-10 mx-auto'>
        {/* imgs in the contact page */}
        <Image
          src={contactLg}
          alt='tds-contact'
          className={`hidden ${isContact && 'md:block'
            } absolute bottom-[10%] left-[20%]`}
        />
        <Image
          src={contactSm}
          alt='tds-contact'
          className={`${isContact ? 'block' : 'hidden'
            } md:hidden w-[70%] absolute bottom-[30%] left-[10%]`}
        />

        {/* col-1 */}
        <article className='z-20 text-[#fff] pt-[10.4375rem] sm:pt-[8.0625rem] pb-[6rem] shrink-0'>
          <h2 className='max-[330px]:text-[2rem] text-[2.5rem] font-bold pb-6'>
            {headers[varient]}
          </h2>
          <ul className='flex items-center gap-1 max-[330px]:text-[1rem] text-[1.25rem]'>
            <li>
              <Link
                scroll={false}
                href={'/' + lng}
                className='flex items-center gap-4'
              >
                <Image src={Home} alt='tds-home' />
                <span>{lng == 'en' ? 'Home' : 'الرئيسية'}</span>{' '}
              </Link>
            </li>
            <li>
              <Image className={`${lng == 'ar' && 'rotate-180'}`} src={navArrow} alt='nav-arrow' />
            </li>
            <li>{headers[varient]}</li>
          </ul>
        </article>

        {/* col-2 */}
        <article className='relative w-[29.875rem] h-[16.6875rem] self-end'>
          <Image
            src={tdsCropped}
            alt='tds'
            className={`hidden ${varient != '/solutions' && 'md:block'
              } absolute bottom-0`}
          />
          <Image
            src={tdsCroppedVarient}
            alt='tds'
            className={`hidden ${varient == '/solutions' && 'md:block'
              } absolute bottom-0`}
          />
        </article>
        <Image
          src={tds}
          width={253}
          height={270}
          alt='tds'
          className={`md:hidden ${varient == '/solutions' && 'hidden'
            } absolute z-10 bottom-0 right-[-120px] opacity-50 bg`}
        />
        <Image
          src={tdsVarient}
          alt='tds'
          className={`${varient != '/solutions' && 'hidden'
            } md:hidden z-10 absolute bottom-0 right-[-120px]`}
        />
      </section>
    </header>
  )
}

export default SectionHeader
