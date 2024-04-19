import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "telehuntflex telehunth-9 telehuntw-full telehuntrounded-md telehuntborder telehuntborder-input telehuntbg-transparent telehuntpx-3 telehuntpy-1 telehunttext-sm telehuntshadow-sm telehunttransition-colors file:telehuntborder-0 file:telehuntbg-transparent file:telehunttext-sm file:telehuntfont-medium placeholder:telehunttext-muted-foreground focus-visible:telehuntoutline-none focus-visible:telehuntring-1 focus-visible:telehuntring-ring disabled:telehuntcursor-not-allowed disabled:telehuntopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
