import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Terminal, TerminalLine, TerminalOutput } from "@/components/ui/terminal"
import { AlertTriangle, Check, Info, X } from "lucide-react"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b-4 border-black bg-yellow-400 px-8 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="font-mono text-4xl font-black uppercase tracking-tighter">
              Brutalist<span className="text-white bg-black px-2 ml-2">CSS</span>
            </h1>
            <div className="flex items-center gap-4">
              <Label htmlFor="dark-mode" className="text-black">Dark Mode</Label>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <section className="mb-16">
            <h2 className="font-mono text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Raw. Honest.<br />Unpolished.
            </h2>
            <p className="font-mono text-xl uppercase tracking-wide text-muted-foreground max-w-2xl">
              A brutalist-inspired design system for React. No rounded corners.
              No gradients. Just bold borders, harsh shadows, and honest interfaces.
            </p>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Buttons Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Inputs Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Inputs
            </h3>
            <div className="grid gap-6 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled</Label>
                <Input id="disabled" disabled placeholder="Disabled input" />
              </div>
            </div>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Badges Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Badges
            </h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Cards Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Cards
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm">
                    This is a brutalist card component. It features harsh borders,
                    no rounded corners, and bold shadow offsets.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>

              <Card className="bg-yellow-400">
                <CardHeader>
                  <CardTitle>Accent Card</CardTitle>
                  <CardDescription className="text-black/70">With background color</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm text-black">
                    Cards can be customized with different background colors
                    while maintaining the brutalist aesthetic.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Alerts Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Alerts
            </h3>
            <div className="space-y-4 max-w-2xl">
              <Alert>
                <Info className="h-5 w-5" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is a default alert for general information.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Something needs your attention but is not critical.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <Check className="h-5 w-5" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your action was completed successfully.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <X className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Tabs Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Tabs
            </h3>
            <Tabs defaultValue="overview" className="max-w-2xl">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="font-mono text-sm">
                  Brutalist design embraces raw, unfinished aesthetics. It celebrates
                  the honest expression of materials and structure without decorative
                  embellishments.
                </p>
              </TabsContent>
              <TabsContent value="features">
                <ul className="font-mono text-sm space-y-2">
                  <li>• No rounded corners</li>
                  <li>• Bold, offset shadows</li>
                  <li>• High contrast colors</li>
                  <li>• Monospace typography</li>
                  <li>• Thick borders</li>
                </ul>
              </TabsContent>
              <TabsContent value="code">
                <pre className="font-mono text-sm bg-gray-100 p-4 border-2 border-black overflow-x-auto">
{`import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Click me</Button>
}`}
                </pre>
              </TabsContent>
            </Tabs>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Dialog Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
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
                <div className="py-4">
                  <p className="font-mono text-sm">
                    Dialog content goes here. You can put any content inside,
                    including forms, images, or other components.
                  </p>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Terminal Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Terminal
            </h3>
            <Terminal title="brutalist-css" className="max-w-2xl">
              <div className="space-y-2">
                <TerminalLine>npm install brutalist-css</TerminalLine>
                <TerminalOutput>
                  added 42 packages in 2.1s
                </TerminalOutput>
                <TerminalLine>npm run dev</TerminalLine>
                <TerminalOutput>
                  <span className="text-green-400">VITE v5.4.10</span> ready in 234 ms
                </TerminalOutput>
                <TerminalOutput>
                  ➜ Local: <span className="text-cyan-400">http://localhost:5173/</span>
                </TerminalOutput>
              </div>
            </Terminal>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Typography Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Typography
            </h3>
            <div className="space-y-6">
              <h1 className="font-mono text-5xl font-black uppercase tracking-tighter">
                Heading 1
              </h1>
              <h2 className="font-mono text-4xl font-black uppercase tracking-tight">
                Heading 2
              </h2>
              <h3 className="font-mono text-3xl font-bold uppercase tracking-wide">
                Heading 3
              </h3>
              <h4 className="font-mono text-2xl font-bold uppercase">
                Heading 4
              </h4>
              <p className="font-mono text-base">
                Body text in monospace. Brutalist typography is typically set in
                monospace fonts with uppercase transforms and wide letter-spacing.
              </p>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                Small caption text for labels and descriptions
              </p>
            </div>
          </section>

          <hr className="border-t-4 border-black my-12" />

          {/* Switch Section */}
          <section className="mb-16">
            <h3 className="font-mono text-3xl font-black uppercase tracking-tight mb-8">
              Switch
            </h3>
            <div className="flex items-center gap-4">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-black bg-black text-white px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-sm uppercase tracking-wider">
              Brutalist CSS — A design system playground
            </p>
            <p className="font-mono text-xs text-gray-500 mt-2 uppercase">
              Built with React, Vite, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
