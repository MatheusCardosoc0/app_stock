import { ProductProps } from '@/@types/product'
import ShelfForm from '@/components/form/ShelfForm'

const pageFormShelf = async () => {
  const response = await fetch('https://backend-app-stock.vercel.app/product', {
    next: {
      revalidate: 0,
    },
  })

  const products = await response.json()

  return (
    <>
      <ShelfForm products={products as ProductProps[]} />
    </>
  )
}

export default pageFormShelf
