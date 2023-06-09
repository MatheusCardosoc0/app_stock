import ShelfForm from '@/components/form/ShelfForm'
import { api } from '@/libs/axiosConfig'

const pageFormShelf = async () => {
  const response = await api.get('/product')

  const products = response.data

  return (
    <>
      <ShelfForm products={products} />
    </>
  )
}

export default pageFormShelf
