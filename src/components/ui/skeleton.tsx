import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("telehuntanimate-pulse telehuntrounded-md telehuntbg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
