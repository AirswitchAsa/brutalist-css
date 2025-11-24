import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-4 border-black bg-white px-4 py-3 font-mono text-base shadow-[4px_4px_0_0_black] transition-all duration-100 file:border-0 file:bg-transparent file:font-mono file:text-sm file:font-bold file:uppercase placeholder:text-gray-500 placeholder:uppercase placeholder:tracking-wide focus:shadow-[2px_2px_0_0_black] focus:translate-x-[2px] focus:translate-y-[2px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
