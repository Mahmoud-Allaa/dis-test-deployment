import Image from 'next/image'
import ibm from '@/public/Shared/ibm.png'
import naqel from '@/public/Shared/naqel.png'
import cafi from '@/public/Shared/cafi.png'
import sun from '@/public/Shared/sun.png'
import raya from '@/public/Shared/raya.png'
import { useTranslation } from '@/app/i18n'

const Clients = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)

    const clients = [
        ibm, cafi, sun, raya, naqel
    ]
    return (
        <section className="text-center bg-white p-[70px]">
            <h2 className='text-[24px] md:text-[31px] font-[600]'>{t("home.clients.1")}</h2>
            <div className="flex flex-col md:flex-row items-center gap-10 justify-between mt-[90px]">
                {clients.map((c, i) => (
                    <div key={i} className="">
                        <Image className='max-w-[150px] h-[auto]' src={c} alt='img' />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients