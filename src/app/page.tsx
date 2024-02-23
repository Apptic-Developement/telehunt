import Hero from "@/components/pages/home/hero";
import ItemView from "@/components/pages/home/item-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchOutlined, ArrowRightAltOutlined } from "@mui/icons-material";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  const tags = [
    "community",
    "indian",
    "anime",
    "manga",
    "finance",
    "community",
    "indian",
    "anime",
    "manga",
    "finance",
  ];
  return (
    <main className="container mx-auto my-14 flex flex-col">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl mx-auto font-bold">
          Discover numerous Telegram bots, channels, groups!
        </h1>
        <div className="flex flex-col items-center md:w-[600px] w-full mx-auto gap-3">
          <div className="flex items-center gap-2 w-full backdrop-blur supports-[backdrop-filter]:bg-secondary/40 border rounded-md px-3 py-2 shadow-md">
            <input
              className="w-full focus-visible:outline-none bg-transparent"
              type="text"
              placeholder="Search for a channel, bot, group..."
            />
            <button>
              <SearchOutlined />
            </button>
          </div>
          <Carousel
            className="flex justify-center items-center gap-2 w-full mx-auto"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="basis-auto px-4 gap-3">
              {
                tags && tags.map((tag) => {
                  return (
                    <Link
                      className="px-3 py-2 supports-[backdrop-filter]:bg-secondary/30 border rounded-md
                      capitalize hover:supports-[backdrop-filter]:bg-secondary/90 duration-200 ease-in-out transition-all"
                      key={tag}
                      href={`/explore?tag=${tag.toLowerCase()}`}>{tag}</Link>
                  )
                })
              }
            </CarouselContent>
            <CarouselPrevious className="md:block hidden" />
            <CarouselNext className="md:block hidden"/>
          </Carousel>
        </div>
      </section>
    </main>
  );
}
