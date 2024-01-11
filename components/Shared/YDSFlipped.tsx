import Image from 'next/image'
import YDS from '@/public/Shared/yds.png'

const YDSFilpped = ({
  flipped,
  styles,
  gap,
}: {
  flipped?: boolean
  styles?: string
  gap?: string
}) => {
  return (
    <article
      className={`${styles} grid grid-cols-2 ${gap || 'gap-12'} ${
        flipped && 'rotate-90'
      }`}
    >
      <Image src={YDS} alt='yds' />
      <Image src={YDS} alt='yds' className='rotate-180' />
    </article>
  )
}

export default YDSFilpped
