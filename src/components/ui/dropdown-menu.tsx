"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "telehuntflex telehuntcursor-default telehuntselect-none telehuntitems-center telehuntrounded-sm telehuntpx-2 telehuntpy-1.5 telehunttext-sm telehuntoutline-none focus:telehuntbg-accent data-[state=open]:telehuntbg-accent",
      inset && "telehuntpl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="telehuntml-auto telehunth-4 telehuntw-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "telehuntz-50 telehuntmin-w-[8rem] telehuntoverflow-hidden telehuntrounded-md telehuntborder telehuntbg-popover telehuntp-1 telehunttext-popover-foreground telehuntshadow-lg data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=open]:telehuntfade-in-0 data-[state=closed]:telehuntzoom-out-95 data-[state=open]:telehuntzoom-in-95 data-[side=bottom]:telehuntslide-in-from-top-2 data-[side=left]:telehuntslide-in-from-right-2 data-[side=right]:telehuntslide-in-from-left-2 data-[side=top]:telehuntslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "telehuntz-50 telehuntmin-w-[8rem] telehuntoverflow-hidden telehuntrounded-md telehuntborder telehuntbg-popover telehuntp-1 telehunttext-popover-foreground telehuntshadow-md",
        "data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=open]:telehuntfade-in-0 data-[state=closed]:telehuntzoom-out-95 data-[state=open]:telehuntzoom-in-95 data-[side=bottom]:telehuntslide-in-from-top-2 data-[side=left]:telehuntslide-in-from-right-2 data-[side=right]:telehuntslide-in-from-left-2 data-[side=top]:telehuntslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "telehuntrelative telehuntflex telehuntcursor-default telehuntselect-none telehuntitems-center telehuntrounded-sm telehuntpx-2 telehuntpy-1.5 telehunttext-sm telehuntoutline-none telehunttransition-colors focus:telehuntbg-accent focus:telehunttext-accent-foreground data-[disabled]:telehuntpointer-events-none data-[disabled]:telehuntopacity-50",
      inset && "telehuntpl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "telehuntrelative telehuntflex telehuntcursor-default telehuntselect-none telehuntitems-center telehuntrounded-sm telehuntpy-1.5 telehuntpl-8 telehuntpr-2 telehunttext-sm telehuntoutline-none telehunttransition-colors focus:telehuntbg-accent focus:telehunttext-accent-foreground data-[disabled]:telehuntpointer-events-none data-[disabled]:telehuntopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="telehuntabsolute telehuntleft-2 telehuntflex telehunth-3.5 telehuntw-3.5 telehuntitems-center telehuntjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="telehunth-4 telehuntw-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "telehuntrelative telehuntflex telehuntcursor-default telehuntselect-none telehuntitems-center telehuntrounded-sm telehuntpy-1.5 telehuntpl-8 telehuntpr-2 telehunttext-sm telehuntoutline-none telehunttransition-colors focus:telehuntbg-accent focus:telehunttext-accent-foreground data-[disabled]:telehuntpointer-events-none data-[disabled]:telehuntopacity-50",
      className
    )}
    {...props}
  >
    <span className="telehuntabsolute telehuntleft-2 telehuntflex telehunth-3.5 telehuntw-3.5 telehuntitems-center telehuntjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="telehunth-4 telehuntw-4 telehuntfill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "telehuntpx-2 telehuntpy-1.5 telehunttext-sm telehuntfont-semibold",
      inset && "telehuntpl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("telehunt-mx-1 telehuntmy-1 telehunth-px telehuntbg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("telehuntml-auto telehunttext-xs telehunttracking-widest telehuntopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
