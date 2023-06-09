import { ProductProps } from '@/@types/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProductProps {
  product: ProductProps
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  function truncateProductName(name: string): string {
    if (name.length > 20) {
      return name.slice(0, 20) + '...'
    }
    return name
  }

  return (
    <Link
      href={`/detail/product/${product.id}`}
      className="
        w-[90%]
        max-w-[300px] 
        cursor-pointer 
        rounded-lg 
        bg-neutral-50 
        p-4 
        drop-shadow-[0px_0px_1px_black] 
        transition-all
        duration-500
        hover:scale-110
      "
    >
      <Image
        src={product.image}
        width={520}
        height={320}
        className="h-60 w-full"
        alt="product"
      />
      <span>{truncateProductName(product.name)}</span>
    </Link>
  )
}

export default CardProduct
