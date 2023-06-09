'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { api } from '@/libs/axiosConfig'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Camera } from 'lucide-react'

const schema = z.object({
  name: z.string().min(1, 'Insira um nome para o produto'),
  description: z
    .string()
    .min(12, 'A descrição deve conter mais de 12 palavras'),
})

type formProps = z.infer<typeof schema>

const ProductForm = () => {
  const [image, setImage] = useState<string | Blob>('')
  const [currentImageUrl, setCurrentImageUrl] = useState('')

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
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('image', image)
    formData.append('description', data.description)

    try {
      await api.post('/product', formData)

      alert('success')
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      const fileSize = file.size / 1024 / 1024 // Tamanho do arquivo em MB

      if (fileSize <= 2) {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i

        if (allowedExtensions.test(file.name)) {
          setImage(file)
          setCurrentImageUrl(URL.createObjectURL(file))
        } else {
          console.log(
            'Extensão de arquivo inválida. Apenas arquivos JPG e PNG são permitidos.',
          )
        }
      } else {
        console.log(
          'Tamanho de arquivo inválido. O tamanho máximo permitido é de 2MB.',
        )
      }
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
        <div
          className="
            relative
            mx-auto
            h-32
            w-[90%]
            overflow-hidden
            rounded-lg
            bg-black
          "
        >
          <input
            id="fileInput"
            className={`hidden h-full w-full outline-none`}
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handleFileUpload}
          />

          <label htmlFor="fileInput">
            <Camera
              className="
                absolute 
                left-1/2 
                top-1/2 
                z-30 
                h-20 
                w-20 
                -translate-x-1/2 
                -translate-y-1/2 
                cursor-pointer
                text-white
                transition-all
                duration-500
                hover:scale-150
              "
            />
          </label>

          {currentImageUrl && (
            <Image
              src={currentImageUrl}
              alt="current image"
              width={520}
              height={320}
              className="absolute z-10"
            />
          )}
        </div>
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
