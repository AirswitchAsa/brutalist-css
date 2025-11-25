import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { IconButton } from "@/components/ui/icon-button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown"
import { Terminal, TerminalLine, TerminalOutput } from "@/components/ui/terminal"
import { Tree, type TreeItem } from "@/components/ui/tree"
import { Loading } from "@/components/ui/loading"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, Settings, User, Search, Bell, Globe, Heart, Star, Bookmark, Mail } from "lucide-react"

const treeData: TreeItem[] = [
  {
    id: "1",
    label: "src",
    children: [
      {
        id: "1-1",
        label: "components",
        children: [
          { id: "1-1-1", label: "Button.tsx" },
          { id: "1-1-2", label: "Input.tsx" },
          {
            id: "1-1-3",
            label: "ui",
            children: [
              { id: "1-1-3-1", label: "dialog.tsx" },
              { id: "1-1-3-2", label: "dropdown.tsx" },
              { id: "1-1-3-3", label: "badge.tsx" },
            ],
          },
        ],
      },
      {
        id: "1-2",
        label: "hooks",
        children: [
          { id: "1-2-1", label: "useAuth.ts" },
          { id: "1-2-2", label: "useTheme.ts" },
        ],
      },
      { id: "1-3", label: "App.tsx" },
      { id: "1-4", label: "main.tsx" },
    ],
  },
  {
    id: "2",
    label: "public",
    children: [
      { id: "2-1", label: "favicon.ico" },
      { id: "2-2", label: "robots.txt" },
    ],
  },
  { id: "3", label: "package.json" },
  { id: "4", label: "tsconfig.json" },
  { id: "5", label: "README.md" },
]

const CollapsibleSection = ({ title, children, defaultOpen = true }: { title: string; children: ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-primary/20 first:border-t-0">
      <div
        className="flex items-center gap-grid-1 px-grid-2 py-grid-1 font-sans text-xs font-semibold leading-normal tracking-wider text-muted-foreground uppercase cursor-pointer hover:text-primary"
        onClick={() => setOpen(!open)}
      >
        <div
          className="w-2.5 h-2.5 rounded-full bg-action shrink-0"
          style={{ clipPath: open ? "inset(50% 0 0 0)" : "inset(0 0 0 50%)" }}
        />
        {title}
      </div>
      {open && children}
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b-4 border-primary bg-primary py-grid-3">
          <div className="max-w-6xl mx-auto px-grid-4 flex items-center justify-between">
            <h1 className="font-sans text-4xl font-black tracking-tighter leading-tight text-primary-foreground">
              Brutalist<span className="text-primary bg-secondary px-grid-1 ml-grid-1">css</span>
            </h1>
            <div className="flex items-center gap-grid-2">
              <Label htmlFor="dark-mode" className="text-primary-foreground">Dark Mode</Label>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-grid-4 py-grid-6">
          {/* Hero Section */}
          <section className="mb-grid-8">
            <h2 className="font-sans text-5xl font-black tracking-tighter leading-tight mb-grid-3 text-primary">
              A swiss-brutalism design system <br /> for React components.
            </h2>
            <p className="font-sans text-lg leading-normal text-muted-foreground max-w-2xl">
              Open-sourced by Spicadust Inc. — <a href="https://github.com/AirswitchAsa/brutalist-css" className="text-primary underline underline-offset-2 hover:text-action">GitHub</a>
            </p>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Buttons Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Buttons
            </h3>
            <div className="flex flex-wrap gap-grid-2">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="ghost-action">Ghost Action</Button>
              <Button variant="ghost-destructive">Ghost Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Badges Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Badges
            </h3>
            <div className="flex flex-wrap gap-grid-2">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="action">Action</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Inputs Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Inputs
            </h3>
            <div className="grid gap-grid-3 max-w-md">
              <div className="space-y-grid-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-grid-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-grid-1">
                <Label htmlFor="disabled">Disabled</Label>
                <Input id="disabled" disabled placeholder="Disabled input" />
              </div>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Dialog Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Dialog
            </h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a brutalist dialog component with harsh borders and shadows.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-grid-2">
                  <p className="font-sans text-sm leading-normal">
                    Dialog content goes here. You can put any content inside,
                    including forms, images, or other components.
                  </p>
                </div>
                <DialogFooter>
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="outline">Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Typography Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Typography
            </h3>
            <div className="space-y-grid-3">
              <h1 className="font-sans text-5xl font-black tracking-tighter leading-tight text-primary">
                Heading 1
              </h1>
              <h2 className="font-sans text-4xl font-black tracking-tighter leading-tight text-primary">
                Heading 2
              </h2>
              <h3 className="font-sans text-3xl font-bold tracking-tight leading-snug text-primary">
                Heading 3
              </h3>
              <h4 className="font-sans text-2xl font-semibold tracking-tight leading-snug text-primary">
                Heading 4
              </h4>
              <p className="font-sans text-base leading-normal">
                Body text uses Inter font. Brutalist typography emphasizes
                bold weights and tight letter-spacing for headings.
              </p>
              <p className="font-sans text-sm leading-normal tracking-wide text-muted-foreground">
                Small caption text for labels and descriptions
              </p>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Switch Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Switch
            </h3>
            <div className="flex items-center gap-grid-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Checkbox Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Checkbox
            </h3>
            <div className="space-y-grid-2">
              <div className="flex items-center gap-grid-1">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center gap-grid-1">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center gap-grid-1">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="opacity-50">Disabled option</Label>
              </div>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Icon Button Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Icon Buttons
            </h3>
            <div className="flex flex-wrap gap-grid-1">
              <IconButton>
                <Home className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton>
                <Search className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton>
                <User className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton>
                <Settings className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton>
                <Bell className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton>
                <Mail className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton selected>
                <Heart className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton selected>
                <Star className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
              <IconButton selected>
                <Bookmark className="h-4 w-4 stroke-[1.5]" />
              </IconButton>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Dropdown Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Dropdown
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger>Select an option</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem variant="action">Update</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Terminal Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Terminal
            </h3>
            <Terminal title="bash">
              <TerminalLine>npm install brutalist-css</TerminalLine>
              <TerminalOutput>added 42 packages in 2.3s</TerminalOutput>
              <TerminalLine>npm run dev</TerminalLine>
              <TerminalOutput>
                VITE v5.0.0 ready in 300ms
                <br />
                Local: http://localhost:5173/
              </TerminalOutput>
            </Terminal>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Scrollable List Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Scrollable List
            </h3>
            <div className="border border-primary bg-secondary max-w-md h-64 overflow-y-auto brutalist-scrollbar">
              <div className="flex flex-col">
                <CollapsibleSection title="Section A">
                  {Array.from({ length: 7 }, (_, i) => {
                    const isSelected = i === 0 || i === 2
                    return (
                      <div
                        key={`a-${i}`}
                        className="group relative flex items-center gap-grid-1 px-grid-2 py-grid-1 font-sans text-primary cursor-pointer after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:bg-primary after:opacity-0 hover:after:opacity-100"
                      >
                        <Globe className="h-4 w-4 stroke-[1.5] shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold leading-normal truncate hover:underline decoration-2 underline-offset-2">Item A-{i + 1}</div>
                          <div className="text-xs leading-normal tracking-wide text-muted-foreground truncate">Description for item A-{i + 1}</div>
                        </div>
                        <Checkbox defaultChecked={isSelected} className={isSelected ? "" : "opacity-0 group-hover:opacity-100 transition-opacity"} />
                      </div>
                    )
                  })}
                </CollapsibleSection>
                <CollapsibleSection title="Section B">
                  {Array.from({ length: 7 }, (_, i) => {
                    const isSelected = i === 1
                    return (
                      <div
                        key={`b-${i}`}
                        className="group relative flex items-center gap-grid-1 px-grid-2 py-grid-1 font-sans text-primary cursor-pointer after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:bg-primary after:opacity-0 hover:after:opacity-100"
                      >
                        <Globe className="h-4 w-4 stroke-[1.5] shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold leading-normal truncate hover:underline decoration-2 underline-offset-2">Item B-{i + 1}</div>
                          <div className="text-xs leading-normal tracking-wide text-muted-foreground truncate">Description for item B-{i + 1}</div>
                        </div>
                        <Checkbox defaultChecked={isSelected} className={isSelected ? "" : "opacity-0 group-hover:opacity-100 transition-opacity"} />
                      </div>
                    )
                  })}
                </CollapsibleSection>
                <CollapsibleSection title="Section C">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={`c-${i}`}
                      className="group relative flex items-center gap-grid-1 px-grid-2 py-grid-1 font-sans text-primary cursor-pointer after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:bg-primary after:opacity-0 hover:after:opacity-100"
                    >
                      <Globe className="h-4 w-4 stroke-[1.5] shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold leading-normal truncate hover:underline decoration-2 underline-offset-2">Item C-{i + 1}</div>
                        <div className="text-xs leading-normal tracking-wide text-muted-foreground truncate">Description for item C-{i + 1}</div>
                      </div>
                      <Checkbox className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </CollapsibleSection>
              </div>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Loading Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Loading
            </h3>
            <div className="flex flex-wrap items-center gap-grid-4">
              <div className="flex items-center gap-grid-2">
                <Loading variant="spinner" />
                <span className="font-sans text-sm text-muted-foreground">Spinner</span>
              </div>
              <div className="flex items-center gap-grid-2">
                <Loading variant="shapes" />
                <span className="font-sans text-sm text-muted-foreground">Shapes</span>
              </div>
              <div className="flex items-center gap-grid-2">
                <Loading variant="corners" />
                <span className="font-sans text-sm text-muted-foreground">Corners</span>
              </div>
              <div className="flex items-center gap-grid-2">
                <Loading variant="circle" />
                <span className="font-sans text-sm text-muted-foreground">Circle</span>
              </div>
              <div className="flex items-center gap-grid-2">
                <Loading variant="moon" />
                <span className="font-sans text-sm text-muted-foreground">Moon</span>
              </div>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Tooltip Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Tooltip
            </h3>
            <TooltipProvider>
              <div className="flex flex-wrap gap-grid-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start">
                    This is a tooltip
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton>
                      <Settings className="h-4 w-4 stroke-[1.5]" />
                    </IconButton>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start">
                    Settings
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton>
                      <Bell className="h-4 w-4 stroke-[1.5]" />
                    </IconButton>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start">
                    Notifications
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </section>

          <hr className="border-t-2 border-primary my-grid-6" />

          {/* Index Tree Section */}
          <section className="mb-grid-8">
            <h3 className="font-sans text-3xl font-black tracking-tighter leading-tight mb-grid-4 text-primary">
              Index Tree
            </h3>
            <div className="border border-primary bg-secondary max-w-md h-80 overflow-y-auto brutalist-scrollbar">
              <Tree items={treeData} />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-primary bg-primary text-primary-foreground py-grid-4">
          <div className="max-w-6xl mx-auto px-grid-4">
            <p className="font-sans text-sm leading-normal">
              Brutalist css — a design system playground
            </p>
            <p className="font-sans text-xs leading-normal tracking-wide text-primary-foreground/50 mt-grid-1">
              Built with React, Vite, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
