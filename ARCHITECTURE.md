# Groway Studio - Component Architecture Guide

This project is built with a modular, component-based architecture that makes it easy to create new pages while maintaining visual consistency.

## 🏗️ Architecture Overview

### Layout Components (`/src/components/layout/`)
Reusable structural components for consistent page layout:

- **Navigation.tsx** - Fixed header with logo and menu (ready for multi-page navigation)
- **Footer.tsx** - Site footer with links and social icons
- **SectionContainer.tsx** - Wrapper for consistent section spacing and max-width
- **SectionHeader.tsx** - Reusable pattern for section titles with overline and description

### Section Components (`/src/components/sections/`)
Pre-built sections that can be mixed and matched:

- **Hero.tsx** - Full-height hero with animated gradient background
- **Services.tsx** - Grid of service cards with icons
- **About.tsx** - Two-column layout with features and differentiators
- **CTA.tsx** - Call-to-action card with gradient background

## 🚀 Creating New Pages

### Quick Start
Creating a new page is simple - import layout and section components:

```tsx
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { SectionHeader } from "@/components/layout/SectionHeader"

function NewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <SectionContainer>
          <SectionHeader
            overline="New Page"
            title="Page Title"
            description="Page description"
          />
          {/* Your content here */}
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
```

### Creating Custom Section Components

Follow this pattern for new sections:

```tsx
import { SectionContainer } from "@/components/layout/SectionContainer"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"

export function CustomSection() {
  return (
    <SectionContainer id="custom-section" className="bg-secondary/30">
      <SectionHeader
        overline="Optional Label"
        title="Section Title"
        description="Section description"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Your content */}
      </div>
    </SectionContainer>
  )
}
```

## 🎨 Design System

### Colors (defined in `/src/index.css`)
- **Primary**: Electric blue (`oklch(0.55 0.20 250)`) - Main brand color
- **Accent**: Vibrant blue (`oklch(0.60 0.24 250)`) - CTAs and highlights
- **Background**: Deep space (`oklch(0.12 0.03 250)`) - Page background
- **Card**: Dark navy (`oklch(0.18 0.04 250)`) - Card backgrounds
- **Muted**: Medium gray - Secondary text

### Typography
- **Headings**: Space Grotesk (bold, geometric, modern)
- **Body**: Inter (readable, technical yet warm)

Use Tailwind classes:
- H1: `text-4xl lg:text-6xl font-bold`
- H2: `text-3xl lg:text-4xl font-bold`
- H3: `text-xl font-semibold`
- Body: `text-base lg:text-lg`
- Small: `text-xs uppercase tracking-wider`

### Spacing
- Section padding: `py-20 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Grid gaps: `gap-6 lg:gap-8`
- Content spacing: `space-y-4` or `space-y-6`

### Components
All shadcn components are available in `/src/components/ui/`:
- Button, Card, Dialog, Dropdown, Input, etc.
- Use with Tailwind utilities for customization

### Icons
Use @phosphor-icons/react:
```tsx
import { IconName } from "@phosphor-icons/react"
<IconName size={24} weight="duotone" className="text-accent" />
```

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- Mobile: Default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large: `xl:` (1280px)

Common patterns:
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Text: `text-base lg:text-lg`
- Spacing: `py-12 lg:py-20`

## 🎭 Animation Guidelines

Use sparingly and purposefully:
- Fade in on scroll (manual implementation or framer-motion)
- Hover effects: `hover:scale-105 transition-all duration-300`
- Button hover: `group-hover:translate-x-1 transition-transform`

Custom animations in `/src/index.css`:
- `.animate-gradient` - Background gradient animation
- `.gradient-glow` - Radial gradient overlay

## 🔧 Common Patterns

### Service/Feature Grid
```tsx
const items = [...]

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {items.map((item, index) => (
    <Card key={index} className="p-6 hover:border-accent/50 transition-all">
      {/* Card content */}
    </Card>
  ))}
</div>
```

### Two-Column Layout
```tsx
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  <div>{/* Left content */}</div>
  <div>{/* Right content */}</div>
</div>
```

### CTA Section
```tsx
<Card className="p-8 lg:p-16 bg-gradient-to-br from-accent/20 to-card">
  <div className="text-center space-y-6">
    <h2>Title</h2>
    <p>Description</p>
    <Button size="lg" className="bg-accent">CTA Text</Button>
  </div>
</Card>
```

## 📄 Example: Case Studies Page

```tsx
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { CTA } from "@/components/sections/CTA"

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <SectionContainer>
          <SectionHeader
            overline="Case Studies"
            title="Success Stories"
            description="See how we've helped businesses transform with AI"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case study cards */}
          </div>
        </SectionContainer>
        
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
```

## 🎯 Best Practices

1. **Always wrap content in SectionContainer** for consistent spacing
2. **Use SectionHeader** for page/section titles
3. **Maintain the design system** - use defined colors, spacing, and typography
4. **Mobile-first** - design for mobile, enhance for desktop
5. **Semantic HTML** - use proper heading hierarchy (h1 → h2 → h3)
6. **Accessibility** - use ARIA labels, keyboard navigation, sufficient contrast
7. **Component composition** - build complex UIs from simple, reusable pieces

## 🚀 Next Steps

Common pages to build:
- **About** - Team, mission, values
- **Services Detail** - Deep dive into each service
- **Case Studies** - Client success stories
- **Contact** - Contact form and information
- **Blog** - Articles and insights

Each can be built in 20-30 minutes using the existing component library!
