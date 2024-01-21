"use client";

import { Separator } from "@/components/ui/separator";
import Card from "@/components/utils/card";
import { CardData } from "@/lib/types";

export default function ItemView({ data }: { data: CardData[] }) {
  return (
    <section className="flex lg:flex-row flex-col lg:gap-4">
      <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-4 gap-3">
        {data.map((card) => {
          return <Card key={card.name} {...card} />;
        })}
      </div>
      <Separator orientation="vertical" className="h-auto" />
      <div className="lg:flex hidden flex-row">Ads...</div>
    </section>
  );
}
