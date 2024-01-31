import Hero from "@/components/pages/home/hero";
import ItemView from "@/components/pages/home/item-view";
import cards from "@/lib/cards.json";


export default async function Home() {
  return (
    <main className='container mx-auto lg:px-16 md:px-10 px-4 my-10 flex flex-col gap-6'>
      <Hero />
      <ItemView data={cards} />
    </main>
  );
}
