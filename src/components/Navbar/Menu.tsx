'use client'

import { MenuIcon, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const path = usePathname()

  return (
    <>
      {path.includes('form') && (
        <Link href={'/'}>
          <MoveLeft className="h-8 w-8" />
        </Link>
      )}

      {!path.includes('form') && (
        <button>
          <MenuIcon className="h-8 w-8" />
        </button>
      )}
    </>
  )
}

export default Menu
