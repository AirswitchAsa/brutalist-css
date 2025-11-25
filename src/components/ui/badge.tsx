import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 font-sans text-xs font-bold border-2 border-primary",
  {
    variants: {
      variant: {
        default: "bg-secondary text-primary",
        secondary: "bg-info text-primary",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
        outline: "bg-transparent text-primary",
        action: "bg-action text-action-foreground border-action",
        info: "bg-info text-info-foreground",
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
