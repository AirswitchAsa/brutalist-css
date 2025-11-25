import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const loadingVariants = cva(
  "inline-flex items-center justify-center font-mono font-bold text-primary",
  {
    variants: {
      size: {
        sm: "text-sm w-4 h-4",
        default: "text-lg w-6 h-6",
        lg: "text-2xl w-8 h-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export type LoadingVariant =
  | "spinner"
  | "shapes"
  | "corners"
  | "circle"
  | "moon"

export interface LoadingProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof loadingVariants> {
  variant?: LoadingVariant
}

const frames: Record<LoadingVariant, string[]> = {
  spinner: ["/", "—", "\\", "|"],
  shapes: ["●", "▲", "■"],
  corners: ["▖", "▘", "▝", "▗"],
  circle: ["◴", "◷", "◶", "◵"],
  moon: ["◐", "◓", "◑", "◒"],
}

const speeds: Record<LoadingVariant, number> = {
  spinner: 250,
  shapes: 500,
  corners: 500,
  circle: 500,
  moon: 500,
}

function Loading({ className, size, variant = "spinner", ...props }: LoadingProps) {
  const [frame, setFrame] = React.useState(0)
  const variantFrames = frames[variant]

  React.useEffect(() => {
    setFrame(0)
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % variantFrames.length)
    }, speeds[variant])

    return () => clearInterval(interval)
  }, [variantFrames.length, variant])

  return (
    <span
      className={cn(loadingVariants({ size }), className)}
      aria-label="Loading"
      role="status"
      {...props}
    >
      {variantFrames[frame]}
    </span>
  )
}

Loading.displayName = "Loading"

export { Loading, loadingVariants }
