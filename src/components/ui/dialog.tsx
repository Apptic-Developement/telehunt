"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "telehuntfixed telehuntinset-0 telehuntz-50 telehuntbg-black/80 telehunt data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=open]:telehuntfade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "telehuntfixed telehuntleft-[50%] telehunttop-[50%] telehuntz-50 telehuntgrid telehuntw-full telehuntmax-w-lg telehunttranslate-x-[-50%] telehunttranslate-y-[-50%] telehuntgap-4 telehuntborder telehuntbg-background telehuntp-6 telehuntshadow-lg telehuntduration-200 data-[state=open]:telehuntanimate-in data-[state=closed]:telehuntanimate-out data-[state=closed]:telehuntfade-out-0 data-[state=open]:telehuntfade-in-0 data-[state=closed]:telehuntzoom-out-95 data-[state=open]:telehuntzoom-in-95 data-[state=closed]:telehuntslide-out-to-left-1/2 data-[state=closed]:telehuntslide-out-to-top-[48%] data-[state=open]:telehuntslide-in-from-left-1/2 data-[state=open]:telehuntslide-in-from-top-[48%] sm:telehuntrounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="telehuntabsolute telehuntright-4 telehunttop-4 telehuntrounded-sm telehuntopacity-70 telehuntring-offset-background telehunttransition-opacity hover:telehuntopacity-100 focus:telehuntoutline-none focus:telehuntring-2 focus:telehuntring-ring focus:telehuntring-offset-2 disabled:telehuntpointer-events-none data-[state=open]:telehuntbg-accent data-[state=open]:telehunttext-muted-foreground">
        <Cross2Icon className="telehunth-4 telehuntw-4" />
        <span className="telehuntsr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "telehuntflex telehuntflex-col telehuntspace-y-1.5 telehunttext-center sm:telehunttext-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "telehunttext-lg telehuntfont-semibold telehuntleading-none telehunttracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("telehunttext-sm telehunttext-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
