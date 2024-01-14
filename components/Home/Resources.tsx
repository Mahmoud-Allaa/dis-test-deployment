
import { useTranslation } from '@/app/i18n'
import resourcesFrame from '@/public/Shared/resourcesFrame.svg'
import twoCompanies from '@/public/Shared/twoCompanies.svg'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'


const Resources = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    return (
        <section className='flex flex-col md:flex-row gap-10 justify-between p-[24px] py-[70px] md:p-[70px]'>
            <div className="md:w-[40%] ">
                <h2 className='text-[32px] md:text-[50px] leading-[normal] font-[600] mb-[32px]'>{t("home.resources.1")}</h2>
                <p>{t("home.resources.2")}</p>
                {/* <div className=""> */}
                <button className='bg-[#1EABE3] hover:drop-shadow rounded text-white py-1 mt-5 p-0'>
                    <Link href='https://tds-int.com' target='blank' className='px-10 py-2'>{t("home.resources.3")}</Link>
                </button>
                <button className='bg-[#1F4E79] hover:drop-shadow rounded text-white py-1 mx-5 mt-5 p-0'>
                    <Link href='https://www.itsyscorp.com/' target='blank' className='px-10 py-2'>{t("home.resources.4")}</Link>
                </button>
                {/* </div> */}
            </div>
            <Image className='ml-[-200px] hidden md:block' src={resourcesFrame} alt='img' />
            <div className="md:w-[40%] text-center">
                <Image src={twoCompanies} alt='img' />
                <h3 className='text-[#1EABE3] text-[32px] md:text-[40px] font-[600] mt-[40px]'>{t("home.resources.5")} <br /> {t("home.resources.6")}</h3>
            </div>
        </section>
    )
}

export default Resources