import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-3 w-3 shrink-0 border-2 border-primary bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:rounded-full",
      className
    )}
    {...props}
  />
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
