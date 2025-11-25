import * as React from "react"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ className, title = "terminal", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border-2 border-primary bg-secondary text-primary font-mono text-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/30">
        <div className="w-3 h-3 rounded-full bg-destructive" />
        <div className="w-3 h-3 rounded-full bg-info" />
        <div className="w-3 h-3 rounded-full bg-action" />
        <span className="ml-2 text-xs text-primary/60">
          {title}
        </span>
      </div>
      <div className="p-4 overflow-x-auto">
        {children}
      </div>
    </div>
  )
)
Terminal.displayName = "Terminal"

const TerminalLine = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { prompt?: string }
>(({ className, prompt = "$", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-2", className)}
    {...props}
  >
    <span className="text-primary/60 select-none">{prompt}</span>
    <span>{children}</span>
  </div>
))
TerminalLine.displayName = "TerminalLine"

const TerminalOutput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-primary/60 ml-4", className)}
    {...props}
  />
))
TerminalOutput.displayName = "TerminalOutput"

export { Terminal, TerminalLine, TerminalOutput }
