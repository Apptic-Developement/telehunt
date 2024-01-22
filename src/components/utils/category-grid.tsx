// import { IconType } from "react-icons";
// import { Button } from "../ui/button";
// import { CardData } from "@/lib/types";
// import Card from "./card";

// export default function CaregoryGrid({
//   name,
//   icon: Icon,
//   data,
// }: {
//   name: string;
//   icon: IconType;
//   data: CardData[];
// }) {
//   return (
//     <section className="flex flex-col gap-8 w-full container mx-auto lg:px-16 md:px-10">
//       <div className="flex items-center justify-between gap-2 w-full">
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-2">
//             <Icon size={30} className="md:inline-block hidden" />
//             <h2 className="text-lg capitalize font-semibold">{name}</h2>
//           </div>
//           <p className="text-sm text-muted-foreground">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
//             vero?
//           </p>
//         </div>
//         <Button variant="outline">View all</Button>
//       </div>

//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
//         {data.map((card, index) => (
//           <Card
//             key={index}
//             name={card.name}
//             logo={card.logo}
//             categories={card.categories}
//             description={card.description}
//             totalUsers={card.totalUsers}
//             totalVotes={card.totalVotes}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
