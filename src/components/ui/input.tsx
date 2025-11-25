import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  onSubmit?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onSubmit, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-full border-2 border-primary bg-secondary text-primary px-5 py-3 font-sans text-base placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-info disabled:border-info disabled:text-muted-foreground",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={onSubmit}
          disabled={props.disabled}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-secondary disabled:bg-info disabled:cursor-not-allowed"
          aria-label="Submit"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
