import { ProductProps } from '@/@types/product'
import CardProduct from '@/components/CardProduct'
import NavFormButton from '@/components/NavFormButton'
import { api } from '@/libs/axiosConfig'

export default async function Home() {
  const response = await api('/product')

  const products = await response.data

  return (
    <main
      className="
        relative
        mx-auto
        flex
        w-full
        flex-col
        flex-wrap
        items-center
        justify-center
        gap-12
        pb-60
        pt-40
        md:w-[90%]
        md:flex-row
        md:justify-start
      "
    >
      {products.map((product: ProductProps) => (
        <CardProduct key={product.id} product={product} />
      ))}

      <NavFormButton path="product" />
    </main>
  )
}
