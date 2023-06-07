'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'

interface NavFormButtonProps {
  path: string
}

const NavFormButton: React.FC<NavFormButtonProps> = ({ path }) => {
  return (
    <Link
      href={`/form/${path}`}
      className="
        fixed
        bottom-[20%]
        right-[10%]
        rounded-full
        bg-red-700
        p-6
        text-white
      "
    >
      <Plus className="h-12 w-12" />
    </Link>
  )
}

export default NavFormButton
