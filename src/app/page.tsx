import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import cards from "@/lib/cards.json";
import Card from "@/components/utils/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center container md:my-12 my-20 px-4 h-full w-full">
      {/* Hero */}
      <section className="flex flex-col items-center gap-3 text-center">
        <h1 className="md:text-3xl text-2xl font-semibold">
          Discover numerous Telegram bots, channels, groups!
        </h1>

        <form className="flex items-center bg-card py-2 px-4 border-2 rounded-md md:w-[80%] w-full">
          <input
            className="bg-transparent focus-visible:outline-none w-full"
            type="text"
            placeholder="Search..."
          />
          <Button size="icon" variant="ghost">
            <FaSearch />
          </Button>
        </form>
      </section>

      {/* Channels */}
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            logo={card.logo}
            categories={card.categories}
            description={card.description}
            totalUsers={card.totalMembers}
            totalVotes={card.totalVotes}
          />
        ))}
      </section>
      {/* Groups */}
      {/* Bots */}
    </main>
  );
}
