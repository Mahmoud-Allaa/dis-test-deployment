import c1 from '@/public/Shared/ibm.png'
import c2 from '@/public/Shared/cont2.png'
import c3 from '@/public/Shared/cont3.png'
import c4 from '@/public/Shared/cont4.png'
import c5 from '@/public/Shared/cont5.png'
import c6 from '@/public/Shared/cont6.png'
import c7 from '@/public/Shared/cont7.png'
import c8 from '@/public/Shared/cont8.png'
import c9 from '@/public/Shared/cont9.png'

import phone from '@/public/Shared/form-phone.png'
import fax from '@/public/Shared/fax.png'
import email from '@/public/Shared/form-email.png'
import Image from 'next/image'
import { Button, MenuItem, TextField } from '@mui/material'
import { useTranslation } from '@/app/i18n'


const Contact = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)

    const fields = [
        { label: t("home.contact.4"), required: true, type: 'text' },
        { label: t("home.contact.5"), required: true, type: 'email' },
        { label: t("home.contact.6"), required: true, type: 'tel' },
        { label: t("home.contact.7"), required: true, type: 'text' },
        {
            label: t("home.contact.8"), required: true, type: 'select', opt: [
                { value: '1', label: 'Manufacturing', },
                { value: '2', label: 'Whole Sale', },
                { value: '3', label: 'Retail', },
                { value: '4', label: 'Import / Export', },
                { value: '5', label: 'Projects', },
                { value: '6', label: 'Constructions', },
                { value: '7', label: 'Real Esatate', },
                { value: '8', label: 'Other? - Please Describe in Your Message', },
            ]
        },
        {
            label: t("home.contact.9"), required: true, type: 'select', opt: [
                { value: '1', label: 'Odoo ERP', },
                { value: '2', label: 'DevOps', },
                { value: '3', label: 'E-Invoice Integration', },
                { value: '4', label: 'E-Commerce', },
                { value: '5', label: 'Digital Tranformation', },
                { value: '6', label: 'Other? - Please Describe in Your Message', },
            ]
        },
    ]

    const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9]

    return (
        <section className='flex flex-col-reverse md:flex-row md:bg-[#214080] items-center'>
            <div className={`md:w-[65%] p-[24px] md:px-[100px] ${lng == 'en' ? 'md:pr-[250px]' : 'md:pl-[250px]'} md:py-[70px] bg-[#EDEDED]`}>
                <h2 className='max-w-[500px] text-[32px] md:text-[56px] font-bold'>{t("home.contact.1")} <span className='text-[#1ABCFE]'>{t("home.contact.2")}</span></h2>
                <p className='max-w-[500px]'>{t("home.contact.3")}</p>
                <form className='max-w-[500px]'>
                    {fields.map((f, i) => (
                        f.type !== 'select' ?
                            (<TextField id="outlined-basic" label={f.label} variant="outlined" sx={{ width: '100%', marginTop: '12px' }} required={f.required} />)
                            :
                            (<TextField
                                id="outlined-select-currency"
                                select
                                label={f.label}
                                sx={{ width: '100%', marginTop: '12px' }}
                                required={f.required}
                            // defaultValue=""
                            // helperText="Please select your currency"
                            >
                                {f.opt && f.opt.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>)

                    ))}
                    <button className='bg-[#214080] w-full mt-[24px] rounded py-1 text-white' type='submit' >{t("home.contact.10")}</button>
                </form>


                <div className="flex flex-col md:flex-row gap-y-5 justify-between max-w-[500px] mt-10">
                    <div className="flex flex-row gap-2">
                        <div>
                            <Image src={phone} alt='img' />
                        </div>
                        <div className="flex flex-col leading-[18px]">
                            <span>{t("home.contact.11")}</span>
                            <span className='text-[#1ABCFE] text-[14px]'>03 5432 1234</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <Image src={fax} alt='img' />
                        </div>
                        <div className="flex flex-col leading-[18px]">
                            <span>{t("home.contact.12")}</span>
                            <span className='text-[#1ABCFE] text-[14px]'>03 5432 1234</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <Image src={email} alt='img' />
                        </div>
                        <div className="flex flex-col leading-[18px]">
                            <span>{t("home.contact.13")}</span>
                            <span className='text-[#1ABCFE] text-[14px]'>info@marcc.com.au</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map md:w-[35%] h-full">
                <div className='bg-white p-[24px] drop-shadow rounded-[30px] mx-[24px] max-w-[400px] md:ml-[-200px]'>
                    <h3 className='text-[#1A9FD3] text-center text-[25px] font-[700] my-[10]'>Join The 170+ Companies Relying on DIS Expert!</h3>
                    <div className="grid grid-cols-3 items-center gap-10 ">
                        {images.map((img, i) => (
                            <Image key={i} className='w-[100px] mx-auto' src={img} alt='img' />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact