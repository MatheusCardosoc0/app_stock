import { ShelfProps } from '@/@types/shelf'
import CardShelf from '@/components/CardShelf'
import NavFormButton from '@/components/NavFormButton'
import { api } from '@/libs/axiosConfig'
import React from 'react'

export default async function StockPage() {
  const response = await api('/shelf')

  const shelf: ShelfProps[] = await response.data

  return (
    <main
      className="
        mb-40
        mt-40
        flex
        flex-col
      "
    >
      {shelf.map((shelf) => (
        <CardShelf key={shelf.id} shelf={shelf} />
      ))}

      <NavFormButton path="shelf" />
    </main>
  )
}
