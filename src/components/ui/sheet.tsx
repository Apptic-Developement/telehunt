"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "telehuntfixed telehuntinset-0 telehuntz-50 telehuntbg-black/80 telehunt data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=open]:telehuntfade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "telehuntfixed telehuntz-50 telehuntgap-4 telehuntbg-background telehuntp-6 telehuntshadow-lg telehunttransition telehuntease-in-out data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntduration-300 data-[state=open]:telehuntduration-500",
  {
    variants: {
      side: {
        top: "telehuntinset-x-0 telehunttop-0 telehuntborder-b data-[state=closed]:telehuntslide-out-to-top data-[state=open]:telehuntslide-in-from-top",
        bottom:
          "telehuntinset-x-0 telehuntbottom-0 telehuntborder-t data-[state=closed]:telehuntslide-out-to-bottom data-[state=open]:telehuntslide-in-from-bottom",
        left: "telehuntinset-y-0 telehuntleft-0 telehunth-full telehuntw-3/4 telehuntborder-r data-[state=closed]:telehuntslide-out-to-left data-[state=open]:telehuntslide-in-from-left sm:telehuntmax-w-sm",
        right:
          "telehuntinset-y-0 telehuntright-0 telehunth-full telehuntw-3/4 telehuntborder-l data-[state=closed]:telehuntslide-out-to-right data-[state=open]:telehuntslide-in-from-right sm:telehuntmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="telehuntabsolute telehuntright-4 telehunttop-4 telehuntrounded-sm telehuntopacity-70 telehuntring-offset-background telehunttransition-opacity hover:telehuntopacity-100 focus:telehuntoutline-none focus:telehuntring-2 focus:telehuntring-ring focus:telehuntring-offset-2 disabled:telehuntpointer-events-none data-[state=open]:telehuntbg-secondary">
        <Cross2Icon className="telehunth-4 telehuntw-4" />
        <span className="telehuntsr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "telehuntflex telehuntflex-col telehuntspace-y-2 telehunttext-center sm:telehunttext-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "telehuntflex telehuntflex-col-reverse sm:telehuntflex-row sm:telehuntjustify-end sm:telehuntspace-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("telehunttext-lg telehuntfont-semibold telehunttext-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("telehunttext-sm telehunttext-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
