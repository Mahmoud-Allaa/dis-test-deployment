import { useTranslation } from "@/app/i18n"

const Page = async ({ params: { lng = 'en' } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng)

  return (
    <main className='h-[100vh] flex items-center justify-center'>
      <h1 className='text-3xl font-bold'>{t("contact.1")}</h1>
    </main>
  )
}

export default Page
