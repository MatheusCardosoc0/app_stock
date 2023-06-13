'use client'

import { ShelfProps } from '@/@types/shelf'
import { useModalState } from '@/context/ModalState'
import { api } from '@/libs/axiosConfig'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ControlQuantityButtonsProps {
  shelf: ShelfProps
}

const ControlQuantityButtons: React.FC<ControlQuantityButtonsProps> = ({
  shelf,
}) => {
  const router = useRouter()

  async function SetNewQuantityProductInShelf(op: 'sub' | 'add') {
    let newValue = null

    if (op === 'add') {
      newValue = shelf.Quantity += 1
    }
    if (op === 'sub') {
      newValue = shelf.Quantity -= 1
    }

    try {
      await api.put(`/shelf/${shelf.id}`, {
        Quantity: newValue,
      })
      router.refresh()
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  const { setAction, setIsOpen, setTitle } = useModalState()

  async function deleteShelf() {
    try {
      await api.delete(`/shelf/${shelf.id}`)

      alert('success')
      setIsOpen(false)
      router.refresh()
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  function setDataInModal() {
    setTitle('Tem certeza que quer deletar essa estante?')
    setAction(deleteShelf)
    setIsOpen(true)
  }

  return (
    <div className="flex gap-6 text-3xl">
      <button
        className="text-green-500"
        onClick={() => SetNewQuantityProductInShelf('add')}
      >
        +
      </button>
      {shelf.Quantity >= 2 && (
        <button
          className="text-blue-500"
          onClick={() => SetNewQuantityProductInShelf('sub')}
        >
          -
        </button>
      )}
      <button className="text-red-500" onClick={() => setDataInModal()}>
        <Trash2 />
      </button>
    </div>
  )
}

export default ControlQuantityButtons
