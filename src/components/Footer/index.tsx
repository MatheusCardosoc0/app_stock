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
      <Link href={'/'}>
        <Package2 className="h-8 w-8" />
      </Link>
      <Link href={'/stock'}>
        <Boxes className="h-8 w-8" />
      </Link>
    </footer>
  )
}

export default Footer
