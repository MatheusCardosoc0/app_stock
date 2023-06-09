'use client'

import { ShelfProps } from '@/@types/shelf'
import { api } from '@/libs/axiosConfig'
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

  return (
    <div className="flex gap-8 text-3xl">
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
    </div>
  )
}

export default ControlQuantityButtons
