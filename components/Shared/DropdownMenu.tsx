'use client'
//@ts-ignore
import Link from 'next/link'
//@ts-ignore
import Image from 'next/image'
//@ts-ignore
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import dropDownIcon from '@/public/Shared/dropdown.svg'

const DropdownMenu = ({
  menu,
  title,
  path,
  lng,
}: {
  menu: { title: string; route: string }[]
  title: string
  path?: string
  lng: string
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsOpen((old) => !old)
  }

  const transClass = isOpen ? 'flex' : 'hidden'
  const currentPath = usePathname()

  return (
    <>
      <div className='relative'>
        {path ? (
          <div className='flex gap-2 items-center'>
            <div className={`${currentPath == path ? 'text-secondary' : ''}`}>
              <Link href={'/' + lng + path}>{title}</Link>
            </div>
            <Image
              onClick={toggle}
              className='cursor-pointer'
              src={dropDownIcon}
              alt='icon'
              width={24}
              height={24}
            />
          </div>
        ) : (
          <button
            className={`${currentPath == path ? 'text-secondary' : ''}`}
            onClick={toggle}
          >
            {title}
          </button>
        )}

        <div
          className={`absolute top-10 z-30 max-h-[80vh] w-[300px] overflow-auto flex flex-col bg-zinc-400 rounded-md ${transClass} bg-white text-black`}
        >
          {menu.map((item, index) => (
            <Link
              href={item?.route ? '/' + lng + item.route : ''}
              onClick={toggle}
            >
              <div
                className={`hover:bg-[rgba(0,0,0,0.1)] px-4 py-2 ${
                  index < menu.length - 1 ? 'border-b-[0.2px]' : ''
                } text-sm`}
                key={item.route}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40'
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  )
}

export default DropdownMenu
