
import s1 from '@/public/Shared/s1.png'
import s2 from '@/public/Shared/s2.png'
import s3 from '@/public/Shared/s3.png'
import s4 from '@/public/Shared/s4.png'
import { Button } from '@mui/material'
import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslation } from '@/app/i18n'


const Solutions = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    const services = [
        { img: s1, title: t('home.solutions.2'), desc: t('home.solutions.3') },
        { img: s2, title: t('home.solutions.4'), desc: t('home.solutions.5') },
        { img: s3, title: t('home.solutions.6'), desc: t('home.solutions.7') },
        { img: s4, title: t('home.solutions.8'), desc: t('home.solutions.9') },
    ]

    return (
        <section className='p-[24px] py-[70px] md:p-[70px]'>
            <h2 className='text-[32px] md:text-[50px] font-[600]'>{t("home.solutions.1")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] gap-y-[50px] mt-5 md:mt-[70px] px-0 md:px-[130px]">
                {services.map((s, i) => (
                    <div className='w-full'>
                        <div key={i} className="flex flex-row items-center gap-3 mb-[16px]">
                            <Image src={s.img} alt={s.title} />
                            <h3 className='text-[#1EABE3] text-[20px] font-bold'>{s.title}</h3>
                        </div>
                        <p>{s.desc}</p>
                    </div>
                ))}
                <div className="">
                    <Button variant='outlined' className='text-black border-[black] hover:border-[black] hover:bg-[transparent] capitalize' endIcon={<ArrowRightAltIcon />} >{t("btns.get-started")}</Button>
                </div>
            </div>
        </section>
    )
}

export default Solutions