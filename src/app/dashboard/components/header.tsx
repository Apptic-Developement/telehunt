import { Button } from "@/components/ui/button";
import React from "react";

export default function Header({
  title,
  description,
  showButton,
  onClick,
  buttonText,
}: {
  title: string;
  description: string;
  showButton?: boolean;
  onClick?: () => void;
  buttonText?: string;
}) {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-2">
        <h1 className="capitalize font-extrabold text-2xl">
          {title.toLowerCase()}
        </h1>
        <small className="text-muted-foreground">{description}</small>
      </div>
      {showButton && <Button onClick={onClick}>{buttonText}</Button>}
    </section>
  );
}
