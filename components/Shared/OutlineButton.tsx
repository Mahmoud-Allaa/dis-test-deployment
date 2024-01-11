import Link from 'next/link'

const OutlineButton = ({ text, styles }: { text: string; styles?: string }) => {
  return (
    <button
      className={`max-w-[170px] ${styles} px-5 py-2  text-accent text-[1rem] font-semibold border xl:border-2 border-accent rounded-md`}
    >
      <Link className='flex items-center gap-4' href='/solutions'>
        {text}
        <svg
          width='22'
          height='14'
          viewBox='0 0 22 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='fill-accent'
            d='M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z'
          />
        </svg>
      </Link>
    </button>
  )
}

export default OutlineButton
