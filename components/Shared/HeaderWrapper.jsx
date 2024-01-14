import Image from "next/image";
import heroImg from '@/public/Shared/hero-wave.png'

export default function HeaderWrapper({ children }) {
    return (
        <div className="hero relative flex items-center justify-center">
            <Image className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%]" src={heroImg} alt="img" />
            <div className="z-10">{children}</div>
        </div>
    )
}
