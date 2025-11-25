import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-bold focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-4 border-primary bg-primary text-secondary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:bg-secondary hover:after:h-1",
        outline:
          "border-2 border-primary bg-secondary text-primary after:absolute after:bottom-0.5 after:left-0.5 after:right-0.5 after:h-0 after:bg-action hover:after:h-1",
        ghost:
          "bg-secondary text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:bg-info hover:after:h-1",
        "ghost-action":
          "bg-secondary text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:bg-action hover:after:h-1",
        "ghost-destructive":
          "bg-secondary text-destructive after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:bg-destructive hover:after:h-1",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-xs",
        icon: "h-10 w-10",
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
