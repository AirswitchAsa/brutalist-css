import * as React from "react"
import { cn } from "@/lib/utils"

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, selected = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center h-7 w-7 text-primary border border-transparent transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:border-primary",
          selected && "border-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }
