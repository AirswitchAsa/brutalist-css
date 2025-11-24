import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-wider transition-all duration-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-4 border-black bg-black text-white shadow-[4px_4px_0_0_hsl(45,100%,50%)] hover:shadow-[2px_2px_0_0_hsl(45,100%,50%)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1",
        destructive:
          "border-4 border-red-600 bg-red-600 text-white shadow-[4px_4px_0_0_#991b1b] hover:shadow-[2px_2px_0_0_#991b1b] hover:translate-x-[2px] hover:translate-y-[2px]",
        outline:
          "border-4 border-black bg-white text-black shadow-[4px_4px_0_0_black] hover:shadow-[2px_2px_0_0_black] hover:translate-x-[2px] hover:translate-y-[2px]",
        secondary:
          "border-4 border-black bg-gray-200 text-black shadow-[4px_4px_0_0_black] hover:shadow-[2px_2px_0_0_black] hover:translate-x-[2px] hover:translate-y-[2px]",
        ghost:
          "border-4 border-transparent hover:border-black hover:bg-gray-100",
        link: "text-black underline-offset-4 hover:underline uppercase tracking-wider",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-12 w-12",
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
