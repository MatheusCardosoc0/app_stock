import { ShelfProps } from '@/@types/shelf'
import Image from 'next/image'

interface CardShelfProps {
  shelf: ShelfProps
}

const CardShelf: React.FC<CardShelfProps> = ({ shelf }) => {
  return (
    <div className="flex w-full justify-between bg-neutral-50 p-2 drop-shadow-[0px_0px_1px_black]">
      <div
        className="
          flex
          items-center
        "
      >
        <Image
          src={shelf.Product.image}
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
          <span>{shelf.Product.name}</span>
          <span>{shelf.maturity}</span>
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
        <button>{shelf.Quantity}</button>
        <button>+</button>
      </div>
    </div>
  )
}

export default CardShelf
