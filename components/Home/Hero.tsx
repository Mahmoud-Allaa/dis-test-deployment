import HeaderWrapper from '@/components/Shared/HeaderWrapper'
import { useTranslation } from '@/app/i18n'
import Image from 'next/image'

import img from '@/public/Shared/home-hero-img.jpeg'

const Hero = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)

    return (
        <HeaderWrapper>
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center py-[24px] md:py-[70px]">
                <div className={`w-full md:w-[50%] ${lng == 'en' ? 'px-[24px] md:pl-[70px]' : 'px-[24px] md:pr-[70px]'} `}>
                    <h1 className='text-[32px] md:text-[56px] font-bold'>{t("home.hero.1")}</h1>
                    <p className='text-[18px] md:text-[20px] mt-[32px] md:mt-[70px]'>
                        {t("home.hero.2")}
                    </p>
                </div>
                <div className={`w-full md:w-[40%] ${lng == 'en' ? 'pl-[24px] md:pl-[70px]' : 'pr-[24px] md:pr-[70px]'}`}>
                    <Image className={`${lng == 'en' ? 'rounded-l-[20px]' : 'rounded-r-[20px]'} `} src={img} alt='img' />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Hero
