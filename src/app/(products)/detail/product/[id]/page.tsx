import { ProductProps } from '@/@types/product'
import ControlQuantityButtons from '@/components/ControlQuantityButtons'
import { api } from '@/libs/axiosConfig'
import Image from 'next/image'
import { redirect } from 'next/navigation'

type Params = {
  params: {
    id: string
  }
}

export default async function ProductPageDetail({ params }: Params) {
  const response = await api(`/product/${params.id}`)

  function truncateProductName(name: string): string {
    if (name.length > 10) {
      return name.slice(0, 10) + '...'
    }
    return name
  }

  if (!response.data) {
    redirect('/')
  }

  const product = response.data as ProductProps

  return (
    <div className="mx-auto mb-20 mt-20 flex w-full max-w-[600px] flex-col gap-6 overflow-hidden rounded-lg bg-white p-4 shadow-xl">
      <div className="flex flex-col gap-4">
        <Image
          src={product.image}
          alt="image product"
          width={520}
          height={320}
          className="mx-auto h-80 w-[90%] max-w-[300px] rounded-lg"
        />
        <span>
          <label className="text-sm text-neutral-700">Nome</label>
          <h2>{product.name}</h2>
        </span>
        <span>
          <label className="text-sm text-neutral-700">Descrição</label>
          <p className="max-w-[60%]">{product.description}</p>
        </span>
      </div>

      <div>
        <label className="text-sm text-neutral-700">
          Estantes relacionadas
        </label>
        <div className="w-full overflow-x-scroll">
          <table className="w-full p-4">
            <thead>
              <tr className="flex items-center justify-between border-2">
                <th className="w-[150px] border-2">Produto</th>
                <th className="w-[150px] border-2">Quantidade</th>
                <th className="w-[150px] border-2">Vencimento</th>
                <th className="w-[150px] border-2">Imagem</th>
              </tr>
            </thead>
            <tbody>
              {product.Shelf.map((shelf) => (
                <tr
                  key={shelf.id}
                  className="flex items-center justify-between border-2"
                >
                  <td className="w-[150px] border-2">
                    {truncateProductName(shelf.Product.name)}
                  </td>
                  <td className="flex w-[150px] items-center justify-between border-2 px-1">
                    {shelf.Quantity} <ControlQuantityButtons shelf={shelf} />
                  </td>
                  <td className="w-[150px] border-2">{shelf.maturity}</td>
                  <td className="w-[150px] border-2">
                    <Image
                      src={shelf.Product.image}
                      alt="Product image"
                      width={80}
                      height={80}
                      className="mx-auto h-12 w-12"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
