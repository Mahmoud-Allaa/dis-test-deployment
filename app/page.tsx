import { redirect } from 'next/navigation'

const page = async ({ params: { lng } }: { params: { lng: string } }) => {
  redirect('/en')
  return <main className=''></main>
}

export default page
