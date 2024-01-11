const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 radius-5'>
      <div
        className='absolute inset-0 bg-black opacity-50'
        onClick={onClose}
      ></div>
      <div className='relative bg-white p-6 w-fit-content max-w-[85vw] rounded max-h-[85vh] overflow-scroll'>
        {children}
      </div>
    </div>
  )
}

export default Modal
