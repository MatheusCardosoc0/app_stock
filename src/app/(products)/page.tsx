import CardProduct from '@/components/CardProduct'

export default function Home() {
  const Arr = [1, 2, 3, 4, 5, 54, 3]

  return (
    <main
      className="
        mx-auto
        mt-40
        flex
        w-[90%]
        flex-col
        flex-wrap
        items-center
        justify-center
        gap-12
        md:flex-row
        md:justify-start
      "
    >
      {Arr.map((item) => (
        <CardProduct key={item} />
      ))}
    </main>
  )
}
