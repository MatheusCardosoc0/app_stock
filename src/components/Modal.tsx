'use client'

import { useModalState } from '@/context/ModalState'

const Modal = () => {
  const { isOpen, setIsOpen, action, title } = useModalState()

  function RealizeActionAndCloseModal() {
    action()
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-30
            flex
            w-[90%]
            max-w-[300px] 
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            gap-4
            rounded-lg
            bg-white
            p-4
            drop-shadow-2xl
          "
        >
          <h2 className="text-2xl font-semibold text-neutral-700">{title}</h2>
          <div className="flex justify-between">
            <button
              className="rounded-xl bg-red-500 p-2 font-bold text-white shadow-2xl hover:brightness-125"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>
            <button
              className="rounded-xl bg-blue-500 p-2 font-bold text-white shadow-2xl hover:brightness-125"
              onClick={() => RealizeActionAndCloseModal()}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
