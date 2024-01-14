import { useTranslation } from "@/app/i18n"
import Image from "next/image"
import img from "@/public/Shared/about-team-img.png"


const Team = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)
    return (
        <section className="flex flex-col md:flex-row justify-between gap-10 p-[24px] py-[70px] md:p-[70px]">
            <div className="md:w-[50%]">
                <span className="bg-white p-3 rounded-[100px] text-[13px]">{t("about.team.1")}</span>
                <h2 className="mt-5 text-[31px] font-[500]">{t("about.team.2")}</h2>
                <p className="mt-4">{t("about.team.3")}</p>
                <p className="mt-4">{t("about.team.4")}</p>
                <p className="mt-4">{t("about.team.5")}</p>
                <p className="mt-5 text-center text-[40px] text-[#1A9FD3]">{t("about.team.6")}</p>
            </div>
            <div className="md:w-[40%]">
                <Image src={img} alt="img" />
            </div>
        </section>
    )
}

export default Team