"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "telehuntflex telehunth-9 telehuntw-full telehuntitems-center telehuntjustify-between telehuntwhitespace-nowrap telehuntrounded-md telehuntborder telehuntborder-input telehuntbg-transparent telehuntpx-3 telehuntpy-2 telehunttext-sm telehuntshadow-sm telehuntring-offset-background placeholder:telehunttext-muted-foreground focus:telehuntoutline-none focus:telehuntring-1 focus:telehuntring-ring disabled:telehuntcursor-not-allowed disabled:telehuntopacity-50 [&>span]:telehuntline-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="telehunth-4 telehuntw-4 telehuntopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "telehuntflex telehuntcursor-default telehuntitems-center telehuntjustify-center telehuntpy-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "telehuntflex telehuntcursor-default telehuntitems-center telehuntjustify-center telehuntpy-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "telehuntrelative telehuntz-50 telehuntmax-h-96 telehuntmin-w-[8rem] telehuntoverflow-hidden telehuntrounded-md telehuntborder telehuntbg-popover telehunttext-popover-foreground telehuntshadow-md data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=open]:telehuntfade-in-0 data-[state=closed]:telehuntzoom-out-95 data-[state=open]:telehuntzoom-in-95 data-[side=bottom]:telehuntslide-in-from-top-2 data-[side=left]:telehuntslide-in-from-right-2 data-[side=right]:telehuntslide-in-from-left-2 data-[side=top]:telehuntslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:telehunttranslate-y-1 data-[side=left]:telehunt-translate-x-1 data-[side=right]:telehunttranslate-x-1 data-[side=top]:telehunt-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "telehuntp-1",
          position === "popper" &&
            "telehunth-[var(--radix-select-trigger-height)] telehuntw-full telehuntmin-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("telehuntpx-2 telehuntpy-1.5 telehunttext-sm telehuntfont-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "telehuntrelative telehuntflex telehuntw-full telehuntcursor-default telehuntselect-none telehuntitems-center telehuntrounded-sm telehuntpy-1.5 telehuntpl-2 telehuntpr-8 telehunttext-sm telehuntoutline-none focus:telehuntbg-accent focus:telehunttext-accent-foreground data-[disabled]:telehuntpointer-events-none data-[disabled]:telehuntopacity-50",
      className
    )}
    {...props}
  >
    <span className="telehuntabsolute telehuntright-2 telehuntflex telehunth-3.5 telehuntw-3.5 telehuntitems-center telehuntjustify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="telehunth-4 telehuntw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("telehunt-mx-1 telehuntmy-1 telehunth-px telehuntbg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
