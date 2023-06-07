'use client'

import { SearchIcon, RotateCcw } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Options = () => {
  const router = useRouter()

  return (
    <div className="flex items-center gap-8">
      <button>
        <SearchIcon className="h-8 w-8" />
      </button>
      <button onClick={() => router.refresh()}>
        <RotateCcw className="h-8 w-8" />
      </button>
    </div>
  )
}

export default Options
