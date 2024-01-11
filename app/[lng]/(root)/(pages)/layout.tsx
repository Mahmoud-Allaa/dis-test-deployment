import { ReactNode } from 'react'

const Pageslayout = ({
  children,
  params: { lng },
}: {
  children: ReactNode
  params: { lng: string }
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Pageslayout
