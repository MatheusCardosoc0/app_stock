import { ShelfProps } from '@/@types/shelf'
import Image from 'next/image'
import ControlQuantityButtons from './ControlQuantityButtons'
import Link from 'next/link'

interface CardShelfProps {
  shelf: ShelfProps
}

const CardShelf: React.FC<CardShelfProps> = ({ shelf }) => {
  function truncateProductName(name: string): string {
    if (name.length > 20) {
      return name.slice(0, 20) + '...'
    }
    return name
  }

  return (
    <div className="flex w-full justify-between bg-neutral-50 p-2 drop-shadow-[0px_0px_1px_black]">
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <Link href={`/detail/product/${shelf.Product.id}`}>
          <Image
            src={shelf.Product.image}
            width={520}
            height={320}
            className="h-20 w-20"
            alt="product image"
          />
        </Link>
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
          <span>{truncateProductName(shelf.Product.name)}</span>
          <span>{shelf.maturity}</span>
        </div>
      </div>
      <div
        className="
          flex
          flex-col
          items-center
          gap-4
          text-2xl
          font-bold
          text-zinc-600
        "
      >
        <span>{shelf.Quantity}</span>
        <ControlQuantityButtons shelf={shelf} />
      </div>
    </div>
  )
}

export default CardShelf
