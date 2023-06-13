'use client'

import { api } from '@/libs/axiosConfig'
import { SearchIcon, RotateCcw, Trash2 } from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useModalState } from '@/context/ModalState'

const Options = () => {
  const router = useRouter()
  const path = usePathname()
  const params = useParams()

  const { setIsOpen, setAction, setTitle } = useModalState()

  async function DeleteProduct() {
    try {
      await api.delete(`/product/${params.id}`)

      router.push('/')
      router.refresh()
      alert('success')
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  function setDataModal() {
    setAction(DeleteProduct)
    setTitle('Tem certeza que quer deletar este produto?')
    setIsOpen(true)
  }

  return (
    <div className="flex items-center gap-8">
      {path.includes('detail') ? (
        <button onClick={() => setDataModal()}>
          <Trash2 />
        </button>
      ) : (
        <>
          <button>
            <SearchIcon className="h-8 w-8" />
          </button>
          <button onClick={() => router.refresh()}>
            <RotateCcw className="h-8 w-8" />
          </button>
        </>
      )}
    </div>
  )
}

export default Options
