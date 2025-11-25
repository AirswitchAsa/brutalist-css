import * as React from "react"
import { cn } from "@/lib/utils"

interface TreeItem {
  id: string
  label: string
  children?: TreeItem[]
}

interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TreeItem[]
}

interface TreeNodeProps {
  item: TreeItem
  level?: number
}

const TreeNode = ({ item, level = 0 }: TreeNodeProps) => {
  const [expanded, setExpanded] = React.useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2 font-sans text-sm text-primary cursor-pointer",
          level > 0 && "border-l-2 border-primary"
        )}
        style={{ paddingLeft: `${level * 16 + 16}px` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && (
          <div
            className="w-2.5 h-2.5 rounded-full bg-action shrink-0"
            style={{ clipPath: expanded ? "inset(50% 0 0 0)" : "inset(0 0 0 50%)" }}
          />
        )}
        {!hasChildren && <div className="w-2.5 h-2.5 shrink-0" />}
        <span className="hover:underline decoration-2 underline-offset-2">{item.label}</span>
      </div>
      {expanded && hasChildren && (
        <div>
          {item.children!.map((child) => (
            <TreeNode key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  ({ className, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col", className)}
      {...props}
    >
      {items.map((item) => (
        <TreeNode key={item.id} item={item} />
      ))}
    </div>
  )
)
Tree.displayName = "Tree"

export { Tree, type TreeItem }
