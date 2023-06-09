'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { api } from '@/libs/axiosConfig'
import { useRouter } from 'next/navigation'
import { ProductProps } from '@/@types/product'

const schema = z.object({
  productId: z.string().refine((value) => value !== '', {
    message: 'Selecione um produto',
  }),
  Quantity: z
    .number()
    .int()
    .min(1)
    .transform((value) => Number(value)),
  maturity: z.string().min(7, {
    message: 'Coloque uma data valida',
  }),
})

interface ShelfFormProps {
  products: ProductProps[]
}

type formProps = z.infer<typeof schema>

const ShelfForm: React.FC<ShelfFormProps> = ({ products }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<formProps>({
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
    mode: 'all',
  })

  const router = useRouter()

  const basicInputStyle = 'border-[0.1px] p-2 border-black'

  async function onSubmit(data: formProps) {
    console.log(data)

    try {
      await api.post('/shelf', data)

      alert('success')
      router.push('/shelf')
      router.refresh()
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  function truncateProductName(name: string): string {
    if (name.length > 20) {
      return name.slice(0, 20) + '...'
    }
    return name
  }

  return (
    <form
      className="relative min-h-screen w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[500px]
          flex-col
          gap-4
          bg-white
          px-4
          pb-4
          pt-32
          shadow-md
        "
      >
        <span>Produto*</span>
        <select
          {...register('productId')}
          className="
          mx-auto
          w-full
          max-w-[300px]
          border-2
          border-black
          p-2
          text-center
        "
        >
          <option value={''}>Selecione uma opção</option>
          {products.map((product) => (
            <option
              key={product.id}
              value={product.id}
              className="
               w-full
               max-w-[300px]
               overflow-hidden
               text-center
             "
            >
              {truncateProductName(product.name)}
            </option>
          ))}
        </select>
        {errors.productId && <p>{errors.productId?.message}</p>}

        <span>Quantidade*</span>
        <input
          type="number"
          className={`${basicInputStyle}`}
          {...register('Quantity', { valueAsNumber: true })}
        />
        {errors.Quantity && <p>{errors.Quantity?.message}</p>}

        <span>Validade*</span>
        <input
          className={`${basicInputStyle}`}
          type="date"
          {...register('maturity')}
        />
        {errors.maturity && <p>{errors.maturity?.message}</p>}
      </div>

      <div className="fixed bottom-0 flex w-full justify-around bg-white p-4 text-xl">
        <Link href={'/'} className="hover:text-red-700">
          Cancel
        </Link>
        <button
          type="submit"
          className="
            hover:text-red-700
          "
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default ShelfForm
