# Design system — Project Rahasia Developer Services Landing Page Template

`SN-W00646` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `id`

## Direction

A deep navy page where a periwinkle (#818cf8) phrase forms the second line of a large bold white sans headline. A small monospace status badge sits above it to set a developer tone. The buttons are a solid white and a dark outline, and monospace is kept for labels.

**Mood:** dark, technical, navy, clear, developer

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#94a3b8` · `#475569` · `#64748b` · `#020617` · `#0f172a` · `#cbd5e1` · `#818cf8` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-indigo-500/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-md transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Schedule (`schedule-agenda`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #10b981;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#10b981',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in periwinkle (#818cf8) and the first in bold white sans
- **Do:** Use monospace only for small badges and status tags above the headline
- **Do:** Keep the page on deep navy (#0f172a) with white primary buttons
- **Don't:** Don't set the headline in monospace; it is a bold sans
- **Don't:** Don't use indigo as a page background; the ground is navy
- **Don't:** Don't use the status green for buttons; it appears on the status tag only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
