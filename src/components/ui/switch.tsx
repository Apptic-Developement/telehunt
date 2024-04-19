"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "telehuntpeer telehuntinline-flex telehunth-5 telehuntw-9 telehuntshrink-0 telehuntcursor-pointer telehuntitems-center telehuntrounded-full telehuntborder-2 telehuntborder-transparent telehuntshadow-sm telehunttransition-colors focus-visible:telehuntoutline-none focus-visible:telehuntring-2 focus-visible:telehuntring-ring focus-visible:telehuntring-offset-2 focus-visible:telehuntring-offset-background disabled:telehuntcursor-not-allowed disabled:telehuntopacity-50 data-[state=checked]:telehuntbg-primary data-[state=unchecked]:telehuntbg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "telehuntpointer-events-none telehuntblock telehunth-4 telehuntw-4 telehuntrounded-full telehuntbg-background telehuntshadow-lg telehuntring-0 telehunttransition-transform data-[state=checked]:telehunttranslate-x-4 data-[state=unchecked]:telehunttranslate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
