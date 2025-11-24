import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0_0_black]",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        secondary: "bg-gray-200 text-black",
        destructive: "bg-red-500 text-white border-red-900 shadow-[2px_2px_0_0_#7f1d1d]",
        outline: "bg-transparent text-black",
        accent: "bg-yellow-400 text-black",
        success: "bg-green-400 text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
