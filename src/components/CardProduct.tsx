import { ProductProps } from '@/@types/product'
import Image from 'next/image'
import React from 'react'

interface CardProductProps {
  product: ProductProps
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div className="rounded-lg bg-neutral-50 p-4 drop-shadow-[0px_0px_1px_black]">
      <Image
        src={product.image}
        width={520}
        height={320}
        className="h-60 w-60"
        alt="product"
      />
      <span>{product.name}</span>
    </div>
  )
}

export default CardProduct
