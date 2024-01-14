import { useTranslation } from "@/app/i18n"

import Image from "next/image";
import aboutMissionVision from '@/public/Shared/about-mission-vision.svg'
import vision from '@/public/Shared/vision.png'
import mission from '@/public/Shared/mission.png'

const VisionAndMission = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng)

    const cards = [
        { img: vision, title: 'Our Vision', desc: 'To be the Saudi Arabia leader in transformative business applications and software services, setting new standards for excellence, and inspiring businesses along the Kingdome to reach unprecedented success. At DIS, we are committed to staying at the forefront of the digital landscape, and we believe that this starts with our leadership team' },
        { img: mission, title: 'Our Mission', desc: 'Empower businesses at Saudi Arabia with innovative, reliable, and cost-effective outsourced development solutions, delivered by a team dedicated to pushing the boundaries of what is possible and committed to delivering value in the digital era' },
    ]
    return (
        <section className="flex flex-col md:flex-row gap-10 py-[70px] px-[24px] md:px-[70px]">
            <div className="md:w-[50%]"><Image src={aboutMissionVision} alt="img" /></div>
            <div className="md:w-[45%]">
                <span className="bg-white p-3 rounded-[100px] text-[13px]">Vision & Mission</span>
                <h2 className="my-5 text-[31px] font-[500">Your Trusted Partner</h2>
                {cards.map((c, i) => (
                    <div key={i} className="card mt-5 p-[24px] border border-[lightgray] flex flex-row gap-5 bg-white hover:drop-shadow-lg hover:border-l hover:border-l-[4px] hover:border-l-[#122642]">
                        {/* <div className="line h-[80%] w-[4px] bg-[#122642] absolute top-[10%] left-0" /> */}
                        <Image className="h-[32px]" src={c.img} alt="vision" />
                        <div>
                            <h3 className="text-[20px] font-bold">{c.title}</h3>
                            <p className="text-[16px]">{c.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default VisionAndMission