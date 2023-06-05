import { Arroz } from '@/assets'
import Image from 'next/image'
import React from 'react'

const CardProduct = () => {
  return (
    <div className="rounded-lg bg-neutral-50 p-4 drop-shadow-[0px_0px_1px_black]">
      <Image
        src={Arroz}
        width={520}
        height={320}
        className="h-60 w-60"
        alt="product"
      />
      <span>Arroz</span>
    </div>
  )
}

export default CardProduct
