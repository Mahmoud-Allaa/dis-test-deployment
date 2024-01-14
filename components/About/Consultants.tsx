import { useTranslation } from "@/app/i18n"
import Image from "next/image"

import c1 from "@/public/Shared/consultant1.png"
import c2 from "@/public/Shared/consultant2.png"
import c3 from "@/public/Shared/consultant3.png"
import c4 from "@/public/Shared/consultant4.png"
import c5 from "@/public/Shared/consultant5.png"
import c6 from "@/public/Shared/consultant1.png"
import c7 from "@/public/Shared/consultant7.png"
import c8 from "@/public/Shared/consultant8.png"
import c9 from "@/public/Shared/consultant9.png"

const Consultants = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)

    const consultants = [
        { img: c1, name: t("about.consultants.3"), title: t("about.consultants.4"), desc: t("about.consultants.5") },
        { img: c2, name: t("about.consultants.6"), title: t("about.consultants.7"), desc: t("about.consultants.8") },
        { img: c3, name: t("about.consultants.9"), title: t("about.consultants.10"), desc: t("about.consultants.11") },
        { img: c4, name: t("about.consultants.12"), title: t("about.consultants.13"), desc: t("about.consultants.14") },
        { img: c5, name: t("about.consultants.15"), title: t("about.consultants.16"), desc: t("about.consultants.17") },
        { name: t("about.consultants.18"), title: t("about.consultants.19"), desc: t("about.consultants.20") },
        { img: c7, name: t("about.consultants.21"), title: t("about.consultants.22"), desc: "" },
        { img: c8, name: t("about.consultants.23"), title: t("about.consultants.24"), desc: "" },
        { img: c9, name: t("about.consultants.25"), title: t("about.consultants.26"), desc: "" },
    ]

    return (
        <section className="p-[24px] py-[70px] md:p-[70px] bg-[#fff]">
            <h2 className="mt-5 text-[32px] md:text-[40px] font-[700]">{t("about.consultants.1")}</h2>
            <p className="text-[20px] ">{t("about.consultants.2")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[64px]">
                {consultants.map((c, i) => (
                    <div key={i} className="p-[16px] bg-[#EDEDED] rounded-[10px] drop-shadow hover:drop-shadow-lg">
                        <div className="h-[200px] md:h-[250px]">
                            {c.img && <Image className="h-full w-[auto] mx-auto rounded-t-[8px]" src={c.img} alt="" />}
                        </div>
                        <h3 className="text-[20px] font-[700] mt-10">{c.name}</h3>
                        <h4 className="text-[16px]">{c.title}</h4>
                        <p className="text-[16px] mt-5">{c.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Consultants