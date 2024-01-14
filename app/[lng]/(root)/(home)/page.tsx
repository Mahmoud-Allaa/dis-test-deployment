import Contact from '@/components/Home/Contact'
import Solutions from '@/components/Home/Solutions'
import Products from '@/components/Home/Products'
import Resources from '@/components/Home/Resources'
import OdooApps from '@/components/Home/OdooApps'
import Clients from '@/components/Home/Clients'
import Hero from '@/components/Home/Hero'
import DigitalTransformation from '@/components/Home/DigitalTransformation'

const page = async ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <main className=''>
      <Hero lng={lng} />
      <Clients lng={lng} />
      <OdooApps lng={lng} />
      <Resources lng={lng} />
      <Products lng={lng} />
      <Solutions lng={lng} />
      <DigitalTransformation lng={lng} />
      <Contact lng={lng} />
    </main>
  )
}

export default page
