import { useTranslation } from "@/app/i18n";
import HeaderWrapper from "@/components/Shared/HeaderWrapper";
import Hero from "@/components/About/Hero";
import VisionAndMission from "@/components/About/VisionAndMission";
import Values from "@/components/About/Values";
import Team from "@/components/About/Team";
import Consultants from "@/components/About/Consultants";
import Collaborating from "@/components/About/Collaborating";

const Page = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng)



  return (
    <main>
      <Hero lng={lng} />
      <VisionAndMission lng={lng} />
      <Values lng={lng} />
      <Team lng={lng} />
      <Consultants lng={lng} />
      <Collaborating lng={lng} />
    </main>
  );
};

export default Page;
