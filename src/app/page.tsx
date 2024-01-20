import Hero from "@/components/pages/home/hero";
import ItemView from "@/components/pages/home/item-view";
import CaregoryGrid from "@/components/utils/category-grid";
import cards from '@/lib/cards.json';
import { FaFilter } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
export default function Home() {
  return (
    <main className="container mx-auto lg:px-16 md:px-10 px-4 my-10 flex flex-col gap-6">
      <Hero />
      <ItemView data={cards} />
    </main>
  );
}
