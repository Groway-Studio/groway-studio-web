# Planning Guide

Create a cutting-edge corporate website for Groway Studio, a digital agency specializing in custom-built, advanced AI solutions that drive unprecedented business growth through bespoke AI orchestration and design.

**Experience Qualities**:
1. **Professional** - Establish immediate credibility through refined typography, strategic whitespace, and technical sophistication
2. **Innovative** - Convey cutting-edge AI expertise through subtle animations, modern design patterns, and forward-thinking visual language
3. **Results-Driven** - Focus on business outcomes with clear value propositions, compelling CTAs, and data-backed confidence

**Complexity Level**: Content Showcase (information-focused)
  - Multi-section landing page with modular architecture ready for easy expansion to additional pages. The design system and component library enable seamless creation of internal pages (About, Services, Case Studies, Contact) without restructuring.

## Essential Features

### Hero Section
- **Functionality**: Full-viewport hero with animated gradient background, primary headline, value proposition, and prominent CTA
- **Purpose**: Immediately communicate the agency's unique positioning in custom AI solutions
- **Trigger**: Page load
- **Progression**: Fade in animation → Read headline → Process value prop → Click "Schedule a Demo" CTA → (Future: Opens contact form/calendar)
- **Success criteria**: Clear understanding of Groway Studio's AI specialization within 3 seconds

### Services Section
- **Functionality**: Grid display of AI service offerings with icons, titles, and descriptions
- **Purpose**: Demonstrate breadth of AI capabilities across strategy, machine learning, automation, and custom solutions
- **Trigger**: Scroll into view
- **Progression**: User scrolls → Cards animate in → Hover interactions reveal depth → User comprehends service range
- **Success criteria**: Services are scannable, distinct, and convey technical sophistication

### Navigation System
- **Functionality**: Fixed header with logo and hamburger menu (mobile-ready for future pages)
- **Purpose**: Provide consistent navigation framework for current and future pages
- **Trigger**: Always visible
- **Progression**: Click logo → Return home | Click menu → (Future: Reveal navigation to internal pages)
- **Success criteria**: Navigation structure supports expansion without redesign

### Modular Component Architecture
- **Functionality**: Reusable section components (Hero, ServiceGrid, ContentBlock) with consistent spacing and responsive behavior
- **Purpose**: Enable rapid creation of additional pages (About, Services Detail, Case Studies, Contact) with visual consistency
- **Trigger**: Developer use
- **Progression**: Import component → Pass props → Renders with design system → Maintains brand consistency
- **Success criteria**: New pages can be created in <30 minutes using existing components

### Call-to-Action System
- **Functionality**: Prominent CTAs throughout page driving to demo scheduling
- **Purpose**: Convert visitors into qualified leads
- **Trigger**: Visual prominence at key decision points
- **Progression**: User convinced → Spots CTA → Clicks button → (Future: Calendar integration)
- **Success criteria**: CTAs are unmissable and action-oriented

## Edge Case Handling

- **Mobile Responsiveness**: Full mobile-first design with breakpoints at 768px and 1024px, ensuring all content is readable and CTAs accessible
- **Performance**: Lazy loading for animations, optimized images, minimal bundle size for fast load times
- **Empty States**: All content is pre-defined; no dynamic content requiring empty state handling
- **Slow Connections**: Progressive enhancement ensures content loads before animations trigger
- **Browser Compatibility**: Modern CSS with fallbacks, tested in latest Chrome/Safari/Firefox
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, sufficient color contrast

## Design Direction

The design should feel cutting-edge, sophisticated, and trustworthy—like a premium AI consultancy that builds custom solutions, not a template assembler. Think Apple's technical sophistication meets the boldness of modern AI startups. Minimal interface with strategic moments of visual richness in gradients and micro-interactions that suggest algorithmic complexity without overwhelming.

## Color Selection

Triadic color scheme - Using deep blue (trust/tech), electric blue (innovation), and subtle purple accents (AI/future) to create a sophisticated, forward-thinking palette that suggests both technical mastery and creative AI solutions.

- **Primary Color**: Deep space blue (oklch(0.18 0.04 250)) - Communicates technical depth, professionalism, and the "black box" sophistication of AI systems
- **Secondary Colors**: Electric blue (oklch(0.55 0.20 250)) for interactive elements and highlights; Dark navy (oklch(0.12 0.03 250)) for cards/surfaces providing subtle depth layering
- **Accent Color**: Vibrant electric blue (oklch(0.60 0.24 250)) - High-energy color for CTAs, hover states, and key interactive moments that demand attention and action
- **Foreground/Background Pairings**:
  - Background (Deep Space oklch(0.12 0.03 250)): White text (oklch(0.98 0 0)) - Ratio 16.2:1 ✓
  - Card (Dark Navy oklch(0.18 0.04 250)): White text (oklch(0.98 0 0)) - Ratio 13.8:1 ✓
  - Primary (Electric Blue oklch(0.55 0.20 250)): White text (oklch(0.98 0 0)) - Ratio 4.9:1 ✓
  - Accent (Vibrant Blue oklch(0.60 0.24 250)): White text (oklch(0.98 0 0)) - Ratio 5.2:1 ✓
  - Muted (Medium Gray oklch(0.45 0.01 250)): White text (oklch(0.98 0 0)) - Ratio 6.8:1 ✓

## Font Selection

Typefaces should project technical precision and modern sophistication—San Francisco-style geometric sans-serif for UI clarity paired with a slightly warmer sans for body copy to maintain humanity in technical content.

- **Typographic Hierarchy**:
  - H1 (Hero Headline): Space Grotesk Bold/48px/tight letter-spacing (-0.02em)/line-height 1.1 - Commanding, modern
  - H2 (Section Titles): Space Grotesk Bold/36px/tight letter-spacing (-0.01em)/line-height 1.2 - Strong hierarchy
  - H3 (Service Titles): Space Grotesk Semibold/24px/normal spacing/line-height 1.3 - Clear subsections
  - Body (Descriptions): Inter Regular/16px/normal spacing/line-height 1.6 - Readable, technical yet warm
  - Small (Overline Text): Inter Medium/12px/wide letter-spacing (0.1em)/uppercase - Subtle labels
  - CTA Buttons: Inter Semibold/16px/normal spacing - Clear, actionable

## Animations

Animations should be purposeful and subtle—suggesting the sophisticated algorithms running behind the scenes without distracting from content. Think smooth, physics-based motion that feels responsive and intelligent.

- **Purposeful Meaning**: Motion communicates technical sophistication through smooth, algorithmic-feeling transitions—like data flowing through neural networks
- **Hierarchy of Movement**: Hero gradient (continuous subtle animation) → Section fade-ins on scroll → Card hover elevations → Button micro-interactions

## Component Selection

- **Components**:
  - **Button** (shadcn): Primary CTAs with size="lg" variant, custom electric blue styling for maximum impact
  - **Card** (shadcn): Service offerings with hover effects, subtle borders, dark backgrounds for depth
  - **Separator** (shadcn): Section divisions with low opacity for subtle content breaks
  - Custom **Navigation** component with logo and menu icon
  - Custom **Hero** section component with animated background
  - Custom **ServiceGrid** component for scalable service displays
  - Custom **SectionContainer** wrapper for consistent spacing/max-width across all sections

- **Customizations**:
  - **AnimatedGradient** component: Custom SVG or CSS gradient background for hero with subtle animation
  - **ServiceCard**: Enhanced Card with icon placement, hover scale transforms, and consistent padding
  - **SectionHeader**: Reusable component for section overline + title pattern
  - **Layout** wrapper: Consistent max-width, padding, and responsive behavior for all page sections

- **States**:
  - Buttons: Default (electric blue bg) → Hover (brighter blue + scale) → Active (pressed inset) → Focus (blue ring)
  - Cards: Default (dark navy) → Hover (subtle elevation + border glow) → Focus (keyboard outline)
  - Links: Default (white) → Hover (electric blue color transition)

- **Icon Selection**:
  - Navigation: List/X from Phosphor for menu toggle
  - Logo: TrendUp or ChartLineUp for growth metaphor
  - Services: Brain (AI Strategy), Cpu (Machine Learning), Lightning (Automation), Rocket (Custom Solutions)
  - All icons from @phosphor-icons/react with consistent weight

- **Spacing**:
  - Section vertical padding: py-20 lg:py-32 (80px/128px)
  - Container max-width: max-w-7xl with px-6 lg:px-8
  - Card grid gap: gap-6 lg:gap-8
  - Inter-element spacing: space-y-4 for content blocks
  - Button padding: px-8 py-4 for substantial click targets

- **Mobile**:
  - Hero: Single column, h1 scales down to 32px, maintain impact with larger line-height
  - Navigation: Hamburger menu pattern (future-ready for page links)
  - Service Grid: 1 column mobile → 2 columns tablet → 4 columns desktop
  - Spacing: Reduced section padding (py-12) on mobile, maintained readability
  - CTAs: Full-width on mobile for easy thumb access
