import { ProductProps } from '@/@types/product'
import CardProduct from '@/components/CardProduct'
import NavFormButton from '@/components/NavFormButton'

export default async function Home() {
  const response = await fetch('https://backend-app-stock.vercel.app/product', {
    next: {
      revalidate: 0,
    },
  })

  const products = await response.json()

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
