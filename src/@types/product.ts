import { ShelfProps } from './shelf'

export type ProductProps = {
  id: string
  name: string
  image: string
  description: string
  Shelf: ShelfProps[]
}
