import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "telehuntinline-flex telehuntitems-center telehuntjustify-center telehuntwhitespace-nowrap telehuntrounded-md telehunttext-sm telehuntfont-medium telehunttransition-colors focus-visible:telehuntoutline-none focus-visible:telehuntring-1 focus-visible:telehuntring-ring disabled:telehuntpointer-events-none disabled:telehuntopacity-50",
  {
    variants: {
      variant: {
        default:
          "telehuntbg-primary telehunttext-primary-foreground telehuntshadow hover:telehuntbg-primary/90",
        destructive:
          "telehuntbg-destructive telehunttext-destructive-foreground telehuntshadow-sm hover:telehuntbg-destructive/90",
        outline:
          "telehuntborder telehuntborder-input telehuntbg-background telehuntshadow-sm hover:telehuntbg-accent hover:telehunttext-accent-foreground",
        secondary:
          "telehuntbg-secondary telehunttext-secondary-foreground telehuntshadow-sm hover:telehuntbg-secondary/80",
        ghost: "hover:telehuntbg-accent hover:telehunttext-accent-foreground",
        link: "telehunttext-primary telehuntunderline-offset-4 hover:telehuntunderline",
      },
      size: {
        default: "telehunth-9 telehuntpx-4 telehuntpy-2",
        sm: "telehunth-8 telehuntrounded-md telehuntpx-3 telehunttext-xs",
        lg: "telehunth-10 telehuntrounded-md telehuntpx-8",
        icon: "telehunth-9 telehuntw-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
