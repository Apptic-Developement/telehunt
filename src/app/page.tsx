import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import cards from "@/lib/cards.json";
import CategoryGrid from "@/components/utils/category-grid";
import { GrChannel, GrGroup, GrRobot } from "react-icons/gr";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


export default function Home() {
  return (
    <main className="container mx-auto lg:px-16 md:px-10 px-8 my-10">

      <section className="flex flex-col gap-4">
        <h1 className="md:text-2xl text-xl font-bold">Discover numerous Telegram bots, channels, groups!</h1>
        <form className="flex items-center gap-2">
          <Input className="h-14" placeholder="Search..." />
          <Button variant="secondary" className="h-14"><FaSearch /></Button>
        </form>
        <div className="flex gap-2 mobile:flex-wrap justify-between">
          <Tabs defaultValue="channels" className="w-[400px] mobile:w-full">
            <TabsList className="w-fit mobile:w-full">
              <TabsTrigger value="channels">Channels</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
              <TabsTrigger value="bots">Bots</TabsTrigger>
            </TabsList>
          </Tabs>
          <Popover>
            <PopoverTrigger className="w-fit mobile:w-full">
              <Button className="w-fit mobile:w-full" variant="outline">Filter</Button>
            </PopoverTrigger>
            <PopoverContent>
            </PopoverContent>
          </Popover>
        </div>

      </section>



    </main>
  );
}
