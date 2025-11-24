# Brutalist CSS

A brutalist-inspired UI design system playground for React components. This project demonstrates how brutalist styles apply to commonly used React components, including shadcn/ui components.

## Features

- **Raw, honest design**: No rounded corners, no gradients—just bold borders, harsh shadows, and high contrast
- **shadcn/ui integration**: Pre-styled brutalist versions of popular shadcn/ui components
- **Dark mode support**: Toggle between light and dark brutalist themes
- **Component showcase**: Visual demonstration of buttons, inputs, cards, dialogs, tabs, alerts, and more

## Tech Stack

- **React** (TypeScript)
- **Vite** for fast development and bundling
- **Tailwind CSS** for utility classes
- **shadcn/ui** component primitives with brutalist overrides
- **Volta** for Node.js version management

## Getting Started

### Prerequisites

- [Volta](https://volta.sh/) (recommended for Node.js version management)
- Node.js 20.x

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
brutalist-css/
├── src/
│   ├── components/
│   │   └── ui/           # Brutalist-styled shadcn/ui components
│   │       ├── alert.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── switch.tsx
│   │       ├── tabs.tsx
│   │       └── terminal.tsx
│   ├── lib/
│   │   └── utils.ts      # Utility functions (cn helper)
│   ├── App.tsx           # Main showcase page
│   ├── index.css         # Brutalist CSS layer + Tailwind
│   └── main.tsx          # Entry point
├── components.json       # shadcn/ui configuration
├── tailwind.config.js    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## Design Principles

1. **No rounded corners** (`border-radius: 0`)
2. **Bold, offset shadows** (e.g., `box-shadow: 8px 8px 0 0 black`)
3. **High contrast colors** (black, white, yellow accents)
4. **Monospace typography** (JetBrains Mono, Fira Code)
5. **Thick borders** (4px solid black)
6. **Uppercase text transforms** with wide letter-spacing

## Customization

The brutalist styles are defined in `src/index.css` using Tailwind's `@layer` directive. You can customize:

- Color palette via CSS variables in `:root`
- Shadow offsets and border widths
- Typography settings
- Component-specific overrides

## License

MIT
