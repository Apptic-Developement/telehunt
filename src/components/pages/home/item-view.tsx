// "use client";

// import { HomeContext } from "@/components/contexts/home";
// import { Separator } from "@/components/ui/separator";
// import Card from "@/components/utils/card";
// import { CardData } from "@/lib/types";
// import { useContext } from "react";

// export default function ItemView({ data }: { data: CardData[] }) {
//   const context = useContext(HomeContext);
//   return (
//     <section className="flex lg:flex-row flex-col lg:gap-4">
//       <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-4 gap-3 lg:w-[50%]">
//         {context.tab === 'groups' && data.map((card) => {
//           return <Card key={card.name} {...card} />;
//         })}
//       </div>
//       <Separator orientation="vertical" className="h-auto" />
//       <div className="lg:flex hidden flex-row lg:w-50%">Ads...</div>
//     </section>
//   );
// }

"use client";

import Card, { CardSkeleton } from "@/components/utils/card";
import { CardData } from "@/lib/types";
import { useContext } from "react";
import { useHomeFilterStore } from "@/stores/home-filter";

export default function ItemView({ data }: { data: CardData[] }) {
  const tab = useHomeFilterStore((state) => state.tabs);
  const updateTabs = useHomeFilterStore((state) => state.updateTabs);

  const shortBy = useHomeFilterStore((state) => state.shortBy);
  const updateShortBy = useHomeFilterStore((state) => state.updateShortBy);

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {tab === "channels" &&
        data.map((card) => {
          return <Card key={card.name} {...card} />;
        })}
      {tab === "groups" &&
        data.map((card) => {
          return <CardSkeleton key={card.name} />;
        })}
      {tab === "bots" &&
        data.map((card) => {
          return <CardSkeleton key={card.name} />;
        })}
    </section>
  );
}
