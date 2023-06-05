import { SearchIcon, RotateCcw } from 'lucide-react'

const Options = () => {
  return (
    <div className="flex items-center gap-8">
      <button>
        <SearchIcon className="h-8 w-8" />
      </button>
      <button>
        <RotateCcw className="h-8 w-8" />
      </button>
    </div>
  )
}

export default Options
