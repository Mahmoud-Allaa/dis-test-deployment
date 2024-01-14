import Image from 'next/image'
import odooAppsImg from '@/public/Shared/odooApps.svg'
import { useTranslation } from '@/app/i18n'

const OdooApps = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    return (
        <section className='flex flex-col-reverse md:flex-row gap-10 justify-between items-center p-[24px] py-[70px] md:p-[70px]'>
            <div className="md:w-[40%]">
                <Image src={odooAppsImg} alt='img' />
            </div>
            <div className="md:w-[40%]">
                <h2 className='text-[32px] md:text-[56px] font-[600] mb-[32px]'>{t("home.odooApps.1")}</h2>
                <p>{t("home.odooApps.2")}</p>
            </div>
        </section>
    )
}

export default OdooApps