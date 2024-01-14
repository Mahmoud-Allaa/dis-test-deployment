import Image from 'next/image'

import p1 from '@/public/Shared/p1.png'
import p2 from '@/public/Shared/p2.png'
import p3 from '@/public/Shared/p3.png'
import p4 from '@/public/Shared/p4.png'
import p5 from '@/public/Shared/p5.png'
import p6 from '@/public/Shared/p6.png'
import p7 from '@/public/Shared/p7.png'
import p8 from '@/public/Shared/p8.png'
import p9 from '@/public/Shared/p9.png'
import p10 from '@/public/Shared/p10.png'
import odooGold from '@/public/Shared/odooGold.png'
import { Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslation } from '@/app/i18n'


const Products = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    const products = [
        { img: p1, title: t('home.products.2'), desc: t('home.products.3') },
        { img: p2, title: t('home.products.4'), desc: t('home.products.5') },
        { img: p3, title: t('home.products.6'), desc: t('home.products.7') },
        { img: p4, title: t('home.products.8'), desc: t('home.products.9') },
        { img: p5, title: t('home.products.10'), desc: t('home.products.11') },
        { img: p6, title: t('home.products.12'), desc: t('home.products.13') },
        { img: p7, title: t('home.products.14'), desc: t('home.products.15') },
        { img: p8, title: t('home.products.16'), desc: t('home.products.17') },

    ]

    return (
        <section className='p-[24px] py-[70px] md:p-[70px]'>
            <h2 className='text-[32px] md:text-[50px] font-[600]'>{t("home.products.1")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] gap-y-[50px] mt-10 md:mt-[70px] px-0 md:px-[130px]">
                {products.map((s, i) => (
                    <div className='w-full'>
                        <div key={i} className="flex flex-row items-center gap-3 mb-[16px]">
                            <Image src={s.img} alt={s.title} />
                            <h3 className='text-[#1EABE3] text-[20px] font-bold'>{s.title}</h3>
                        </div>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
            <div className='w-full px-[24px] px-0 md:px-[130px] mt-[50px]'>
                <div className="flex flex-row items-center gap-3 mb-[16px]">
                    <Image src={p9} alt={'icon'} />
                    <h3 className='text-[#1EABE3] text-[20px] font-bold'>{t("home.products.18")}</h3>
                </div>
                <p>{t("home.products.19")}</p>
            </div>
            <div className='w-full px-[24px] px-0 md:px-[130px] mt-[50px]'>
                <div className="flex flex-row items-center gap-3 mb-[16px]">
                    <Image src={p10} alt={'icon'} />
                    <h3 className='text-[#1EABE3] text-[20px] font-bold'>
                        {t("home.products.20")}
                    </h3>
                </div>
                <Image className='max-[640px]:mx-auto md:ml-auto' src={odooGold} alt='odoo gold' />
                <Button variant='outlined' className='mt-10 text-black border-[black] hover:border-[black] hover:bg-[transparent] capitalize' endIcon={<ArrowRightAltIcon />} >{t('btns.get-started')}</Button>
            </div>
        </section>
    )
}

export default Products