import Hero from "@/components/pages/home/hero";
import ItemView from "@/components/pages/home/item-view";
import cards from "@/lib/cards.json";
import { db } from '@/lib/db';
import { users } from "@/lib/schema";
import { sql } from "drizzle-orm";
export default async function Home() {
  console.log(await db.select().from(users).where(sql`phone = '6371357034'`))
  return (
    <main className='container mx-auto lg:px-16 md:px-10 px-4 my-10 flex flex-col gap-6'>
      <Hero />
      <ItemView data={cards} />
    </main>
  );
}
