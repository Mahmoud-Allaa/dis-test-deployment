import { useTranslation } from "@/app/i18n"
import Image from "next/image"

import col1 from "@/public/Shared/col1.png"
import col2 from "@/public/Shared/odooGold.png"
import col3 from "@/public/Shared/col3.png"
import col4 from "@/public/Shared/col4.png"
import col5 from "@/public/Shared/col5.png"
import col6 from "@/public/Shared/col6.png"
import col7 from "@/public/Shared/col7.png"
import col8 from "@/public/Shared/col8.png"


const Collaborating = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    const images = [
        { img: col1, },
        { img: col2, },
        { img: col3, },
        { img: col4, },
        { img: col5, },
        { img: col6, },
        { img: col7, },
        { img: col8, }
    ]
    return (
        <section className="p-[24px] py-[64px] md:px-[70px] md:py-[170px] text-center">
            <h2 className="text-[24px] md:text-[40px] font-[700] mb-5 md:mb-[80px]">{t("about.collaborating.1")}</h2>
            <p className="md:mx-[70px] mb-3">{t("about.collaborating.3")}</p>
            <p className="md:mx-[70px] mb-3">{t("about.collaborating.2")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
                {images.map((img, i) => (
                    <Image className='mx-auto' key={i} src={img.img} alt="img" />
                ))}
            </div>
            {/* <div className="flex flex- flex-row justify-center items-center gap-[12px] md:gap-[100px] mt-[80px]">
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col1} alt="img" />
                </div>
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col2} alt="img" />
                </div>
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col3} alt="img" />
                </div>
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col4} alt="img" />
                </div>
            </div>
            <div className="flex flex- flex-row justify-center items-center gap-[12px] md:gap-[100px] mt-[80px]">
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col5} alt="img" />
                </div>
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col6} alt="img" />
                </div>
                <div className="">
                    <Image className="w-full max-w-[200px]" src={col7} alt="img" />
                </div>
            </div> */}
        </section>
    )
}

export default Collaborating