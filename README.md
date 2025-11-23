# shadcn/ui Components Library

A comprehensive UI components library with a beautiful landing page showcase built with the latest shadcn/ui components.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** latest version
- **Fully responsive** design
- **Dark mode** support (built-in with Tailwind)

## Components Included

- **Button** - All variants (default, secondary, destructive, outline, ghost, link) and sizes
- **Card** - With header, content, and footer sections
- **Input** - Text and email inputs
- **Textarea** - Multi-line text input
- **Select** - Dropdown selections
- **Dialog** - Modal dialogs
- **Tabs** - Tabbed content organization
- **Badge** - Status badges
- **Avatar** - User avatars with fallbacks
- **Accordion** - Collapsible content sections
- **Alert** - Notification messages
- **Label** - Form labels
- **Separator** - Visual dividers
- **Switch** - Toggle switches
- **Checkbox** - Checkboxes
- **Radio Group** - Radio button groups

## Getting Started

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component showcase.

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Project Structure

```
.
├── app/
│   ├── page.tsx          # Landing page with component showcase
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with Tailwind
├── components/
│   └── ui/               # shadcn/ui components
├── lib/
│   └── utils.ts          # Utility functions
└── components.json       # shadcn/ui configuration
```

## Adding More Components

To add additional shadcn/ui components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

## Tech Stack

- **Framework:** Next.js 16.0.3
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.17
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
