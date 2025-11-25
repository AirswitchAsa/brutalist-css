import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b-4 border-primary bg-primary px-8 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="font-sans text-4xl font-black tracking-tighter text-primary-foreground">
              Brutalist<span className="text-primary bg-secondary px-2 ml-2">css</span>
            </h1>
            <div className="flex items-center gap-4">
              <Label htmlFor="dark-mode" className="text-primary-foreground">Dark Mode</Label>
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
            <h2 className="font-sans text-6xl font-black tracking-tighter leading-none mb-6 text-primary">
              A modern brutalist design system <br /> for React components.
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl">
              Open-sourced by Spicadust Inc.
            </p>
          </section>

          <hr className="border-t-2 border-primary my-12" />

          {/* Buttons Section */}
          <section className="mb-16">
            <h3 className="font-sans text-3xl font-black tracking-tight mb-8 text-primary">
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="ghost-action">Ghost Action</Button>
              <Button variant="ghost-destructive">Ghost Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-12" />

          {/* Inputs Section */}
          <section className="mb-16">
            <h3 className="font-sans text-3xl font-black tracking-tight mb-8 text-primary">
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

          <hr className="border-t-2 border-primary my-12" />

          {/* Dialog Section */}
          <section className="mb-16">
            <h3 className="font-sans text-3xl font-black tracking-tight mb-8 text-primary">
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
                  <p className="font-sans text-sm">
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

          <hr className="border-t-2 border-primary my-12" />

          {/* Typography Section */}
          <section className="mb-16">
            <h3 className="font-sans text-3xl font-black tracking-tight mb-8 text-primary">
              Typography
            </h3>
            <div className="space-y-6">
              <h1 className="font-sans text-5xl font-black tracking-tighter text-primary">
                Heading 1
              </h1>
              <h2 className="font-sans text-4xl font-black tracking-tight text-primary">
                Heading 2
              </h2>
              <h3 className="font-sans text-3xl font-bold text-primary">
                Heading 3
              </h3>
              <h4 className="font-sans text-2xl font-bold text-primary">
                Heading 4
              </h4>
              <p className="font-sans text-base">
                Body text uses Inter font. Brutalist typography emphasizes
                bold weights and tight letter-spacing for headings.
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Small caption text for labels and descriptions
              </p>
            </div>
          </section>

          <hr className="border-t-2 border-primary my-12" />

          {/* Switch Section */}
          <section className="mb-16">
            <h3 className="font-sans text-3xl font-black tracking-tight mb-8 text-primary">
              Switch
            </h3>
            <div className="flex items-center gap-4">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-primary bg-primary text-primary-foreground px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-sm">
              Brutalist css — a design system playground
            </p>
            <p className="font-sans text-xs text-primary-foreground/50 mt-2">
              Built with React, Vite, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
