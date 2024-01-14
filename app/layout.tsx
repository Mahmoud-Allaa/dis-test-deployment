export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <section className='relative'>{children}</section>
      </body>
    </html>
  )
}
