"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "telehuntpeer telehunth-4 telehuntw-4 telehuntshrink-0 telehuntrounded-sm telehuntborder telehuntborder-primary telehuntshadow focus-visible:telehuntoutline-none focus-visible:telehuntring-1 focus-visible:telehuntring-ring disabled:telehuntcursor-not-allowed disabled:telehuntopacity-50 data-[state=checked]:telehuntbg-primary data-[state=checked]:telehunttext-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("telehuntflex telehuntitems-center telehuntjustify-center telehunttext-current")}
    >
      <CheckIcon className="telehunth-4 telehuntw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
