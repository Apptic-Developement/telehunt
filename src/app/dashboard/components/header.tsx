import { Button } from "@/components/ui/button";
import React from "react";
import { ChannelAddSheet } from "@/components/pages/channel";
export default function Header({
  title,
  description,
  showButton,
  buttonText,
  buttonType,
}: {
  title: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  buttonType?: "channel" | "group";
}) {
  const getButton: {
    channel: React.ReactNode;
    group: React.ReactNode;
  } = {
    channel: <ChannelAddSheet />,
    group: <Button>Add</Button>,
  };

  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-2">
        <h1 className="capitalize font-extrabold text-2xl">
          {title.toLowerCase()}
        </h1>
        <small className="text-muted-foreground">{description}</small>
      </div>
      {showButton && buttonType && getButton[buttonType]}
    </section>
  );
}
