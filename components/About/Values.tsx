import { useTranslation } from "@/app/i18n"

import Image from "next/image"
import customer from '@/public/Shared/customer.png'
import innovation from '@/public/Shared/innovation.png'
import collaboration from '@/public/Shared/collaboration.png'
import excellance from '@/public/Shared/excellance.png'

const Values = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)

    const values = [
        { img: customer, title: 'Customer First', desc: 'We believe in putting our clients first. Our focus is always on delivering results that exceed their expectations and providing unparalleled support and managed services.' },
        { img: innovation, title: 'Innovation', desc: 'We believe in pushing the boundaries of what is possible. Our team is constantly exploring new technologies and best practices to provide cutting-edge solutions to our clients.' },
        { img: collaboration, title: 'Collaboration', desc: 'We believe in the power of collaboration. Our partnerships with innovative and forward-thinking companies have been crucial to our success in delivering exceptional results to our clients.' },
        { img: excellance, title: 'Excellence', desc: 'We believe in delivering excellence in everything we do. Our dedication to excellence has allowed us to form strong relationships with our clients and partners, and we are proud to have a 95%client retention rate.' },
    ]

    return (
        <section className="p-[24px] py-[70px] md:p-[70px]">
            <span className="bg-white p-3 rounded-[100px] text-[13px]">Our Values</span>
            <h2 className="mt-5 text-[31px] font-[500]">The secret to long-lasting success.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] gap-y-[50px] mt-[40px] px-[24px] md:px-[130px]">
                {values.map((v, i) => (
                    <div key={i} className='w-full'>
                        <div className="flex flex-row items-center gap-3 mb-[16px]">
                            <Image src={v.img} alt={v.title} />
                            <h3 className='text-[#1EABE3] text-[20px] font-bold'>{v.title}</h3>
                        </div>
                        <p>{v.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Values