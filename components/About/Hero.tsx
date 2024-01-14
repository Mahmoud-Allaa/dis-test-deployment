import React from 'react'
import HeaderWrapper from '../Shared/HeaderWrapper'
import { useTranslation } from '@/app/i18n'

const Hero = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    return (
        <HeaderWrapper>
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center p-[24px] md:p-[70px]">
                <div className="w-full md:w-[50%]">
                    <h1 className='text-[32px] md:text-[56px] font-bold'>{t("home.1")}</h1>
                    <p className='text-[18px] md:text-[20px] mt-[32px] md:mt-[70px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi veritatis accusamus delectus neque consequatur, explicabo impedit consectetur similique, quas earum dolorum, maxime sapiente eum magnam est totam quod nam. Culpa corporis sint commodi illo. Vel suscipit, quod vero modi nemo illum nobis alias accusamus nam dolores asperiores at consequatur?
                    </p>
                </div>
                <div className="w-full md:w-[40%]">
                    <div className="w-full h-[300px] bg-[lightgray] rounded"></div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Hero