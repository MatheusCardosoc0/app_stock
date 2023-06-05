import React from 'react'
import Menu from './Menu'
import Options from './Options'
import Image from 'next/image'
import { logo } from '@/assets'

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        top-0
        z-20
        flex
        w-full
        justify-between
        bg-gradient-to-tr
        from-red-500
        via-red-400
        to-red-700
        px-6
        py-3
        text-white
      "
    >
      <div className="flex items-center gap-8">
        <Menu />
        <Image
          src={logo}
          width={120}
          height={120}
          alt="Logo"
          className="h-16 w-16"
        />
      </div>

      <Options />
    </nav>
  )
}

export default Navbar
