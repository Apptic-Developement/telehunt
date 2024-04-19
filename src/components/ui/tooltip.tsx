"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "telehuntz-50 telehuntoverflow-hidden telehuntrounded-md telehuntbg-primary telehuntpx-3 telehuntpy-1.5 telehunttext-xs telehunttext-primary-foreground telehuntanimate-in telehuntfade-in-0 telehuntzoom-in-95 data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=closed]:telehuntzoom-out-95 data-[side=bottom]:telehuntslide-in-from-top-2 data-[side=left]:telehuntslide-in-from-right-2 data-[side=right]:telehuntslide-in-from-left-2 data-[side=top]:telehuntslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
