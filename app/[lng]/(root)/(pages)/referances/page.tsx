import { useTranslation } from "@/app/i18n"
import Image from "next/image"
import map from "@/public/Shared/referances-map.png"

const Page = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng)

  const stories = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  const cards = [
    { num: '120+', title: 'Employee', desc: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla acc Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accForem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus hhsgs  dgdhd dggdg' },
    { num: '90+', title: 'Project', desc: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla acc Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accForem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus hhsgs  dgdhd dggdg' },
    { num: '80+', title: 'Client', desc: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla acc Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accForem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus hhsgs  dgdhd dggdg' },
  ]

  return (
    <main className=''>
      <header className="hero px-[16px] py-[70px] md:px-[70px]">
        <h1 className="text-[32px] md:text-[40px] font-[500] text-center">What clients value  most about us</h1>
        <div className="slider flex flex-row justify-between gap-5 mt-10">
          <div className="trapezoid-l border-l-[24px] border-l-[green] md:border-t-[80px] md:border-b-[80px] md:border-l-[200px] "></div>
          <div className="trapezoid w-full md:w-[400px]"></div>
          <div className="trapezoid-r border-r-[24px] border-r-[green] md:border-t-[80px] md:border-b-[80px] md:border-r-[200px] "></div>
        </div>
      </header>
      {/* /////////// */}
      <section className="px-[24px] md:px-[70px] py-[170px]">
        <h1 className="text-[32px] md:text-[40px] font-[500] text-center">Our Success Stories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {stories.map((s, i) => (
            <div className="text-center">
              <div className="w-[100px] h-[100px] rounded bg-[lightgray] mx-auto" />
            </div>
          ))}
        </div>
      </section>
      {/* /////////// */}
      <section className="px-[24px] md:px-[70px] py-[170px] relative bg-[#EEEDF9] overflow-hidden">
        <div className="absolute top-0 bottom-0 w-full">
          <Image className="h-full mx-auto object-cover" src={map} alt='' />
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {cards.map((c, i) => (
            <div key={i} className="card max-w-[400px] z-10">
              <h3 className="p-[16px] bg-[#392DCA80] rounded-t text-[31px] font-[500] text-center text-white"> {c.num} <br /> {c.title} </h3>
              <p className="rounded-b p-[16px] bg-[#FFFFFF9C]">{c.desc}</p>
            </div>
          ))}


        </div>
      </section>
    </main>
  )
}

export default Page
