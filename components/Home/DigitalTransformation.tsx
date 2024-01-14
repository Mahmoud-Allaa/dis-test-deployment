import digImg from '@/public/Shared/dig-img.png'
import ellipse from '@/public/Shared/ellipse.png'
import { useTranslation } from '@/app/i18n'
import Image from 'next/image'

const DigitalTransformation = async ({ lng = 'en' }) => {
  const { t, i18n } = await useTranslation(lng)

  return (
    <section className='relative p-[24px] md:p-[70px] mb-10'>
      <Image
        src={ellipse}
        alt='img'
        className={`absolute ${i18n.language === 'en' ? 'right-0' : 'left-0 rotate-[270deg]'
          } top-0 w-[270px] hidden lg:block`}
      />
      <h2 className='text-[30px]'>{t("home.digital.1")}</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[180px] pt-[60px] lg:pt-[140px] '>
        <div className=''>
          <Image className='' src={digImg} alt='img' />
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <p className='mb-[40px]'>{t("home.digital.2")}</p>
          <h3 className='text-[30px] font-bold mb-2'>{t("home.digital.3")}</h3>
          <h3 className='text-[30px] font-bold'>{t("home.digital.4")}</h3>
          <button className='bg-[#214080] text-white w-[133px] h-[45px] rounded-md mt-[50px]'>
            {t("btns.know-more")}
          </button>
          <p className='md:self-end mt-[60px]'>
            {t("home.digital.5")}
          </p>
        </div>
      </div>
    </section>
  )
}

export default DigitalTransformation
