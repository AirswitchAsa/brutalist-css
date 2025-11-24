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
        "border-4 border-black bg-black text-green-400 font-mono text-sm shadow-[8px_8px_0_0_#166534]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-green-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-green-600 uppercase tracking-wider">
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
    <span className="text-green-600 select-none">{prompt}</span>
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
    className={cn("text-gray-400 ml-4", className)}
    {...props}
  />
))
TerminalOutput.displayName = "TerminalOutput"

export { Terminal, TerminalLine, TerminalOutput }
