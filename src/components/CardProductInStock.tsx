import { Arroz } from '@/assets'
import Image from 'next/image'
import React from 'react'

const CardProductInStock = () => {
  return (
    <div className="flex w-full justify-between bg-neutral-50 p-2 drop-shadow-[0px_0px_1px_black]">
      <div
        className="
          flex
          items-center
        "
      >
        <Image
          src={Arroz}
          width={520}
          height={320}
          className="h-20 w-20"
          alt="product image"
        />
        <div
          className="
            flex
            flex-col
            gap-4
            text-xl
            font-semibold
            text-zinc-600
          "
        >
          <span>Arroz</span>
          <span>20/12/2004</span>
        </div>
      </div>
      <div
        className="
          flex
          flex-col
          gap-4
          text-2xl
          font-bold
          text-zinc-600
        "
      >
        <button>0</button>
        <button>+</button>
      </div>
    </div>
  )
}

export default CardProductInStock
