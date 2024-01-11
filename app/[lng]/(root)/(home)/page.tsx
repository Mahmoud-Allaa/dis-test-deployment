import { useTranslation } from '../../../i18n'

const page = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng)

  return (
    <main className='h-[100vh] flex items-center justify-center'>
      <h1 className='text-3xl font-bold'>{t("home.1")}</h1>
    </main>
  )
}

export default page
