import { ShelfProps } from '@/@types/shelf'
import CardShelf from '@/components/CardShelf'
import NavFormButton from '@/components/NavFormButton'
import React from 'react'

export default async function StockPage() {
  const response = await fetch('https://backend-app-stock.vercel.app/shelf', {
    next: {
      revalidate: 0,
    },
  })

  const shelf: ShelfProps[] = await response.json()

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
