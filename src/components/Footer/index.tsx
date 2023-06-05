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
        from-red-500
        via-red-400
        to-red-700
        py-4
        text-white
      "
    >
      <Link href={'/'}>
        <Package2 className="h-12 w-12" />
      </Link>
      <Link href={'/stock'}>
        <Boxes className="h-12 w-12" />
      </Link>
    </footer>
  )
}

export default Footer
