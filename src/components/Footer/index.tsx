import { Boxes, Package2 } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="
        fixed
        bottom-0
        flex
        w-full
        justify-around
        bg-gradient-to-tr
        from-red-700
        via-red-600
        to-red-800
        py-2
        text-white
      "
    >
      <Link
        href={'/'}
        className="flex flex-col items-center text-xs font-bold text-white"
      >
        <Package2 className="h-8 w-8 hover:scale-125" />

        <span>Produtos</span>
      </Link>
      <Link
        href={'/shelf'}
        className="flex flex-col items-center text-xs font-bold text-white"
      >
        <Boxes className="h-8 w-8 hover:scale-125" />

        <span>Estante</span>
      </Link>
    </footer>
  )
}

export default Footer
