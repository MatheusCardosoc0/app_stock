'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { api } from '@/libs/axiosConfig'
import { useRouter } from 'next/navigation'
import ImageUpload from '../ImageUpload'

const schema = z.object({
  name: z.string().min(1, 'Insira um nome para o produto'),
  description: z
    .string()
    .min(12, 'A descrição deve conter mais de 12 palavras'),
  image: z.string(),
})

type formProps = z.infer<typeof schema>

const ProductForm = () => {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    register,
  } = useForm<formProps>({
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
    mode: 'all',
    defaultValues: {
      description: '',
      image: '',
      name: '',
    },
  })

  const image = watch('image')

  const router = useRouter()

  const basicInputStyle = 'border-[0.1px] p-2 border-black'

  async function onSubmit(data: formProps) {
    try {
      await api.post('/product', data)

      alert('success')
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
      alert('error')
    }
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
        <span>Nome*</span>
        <input
          className={`${basicInputStyle}`}
          type="text"
          {...register('name')}
        />
        {errors.name && <p>{errors.name?.message}</p>}

        <span>Imagem*</span>
        <ImageUpload
          onChange={(value) => setValue('image', value)}
          value={image}
        />
        <span>Descrição*</span>
        <input
          className={`${basicInputStyle}`}
          type="text"
          {...register('description')}
        />
        {errors.description && <p>{errors.description?.message}</p>}
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

export default ProductForm
