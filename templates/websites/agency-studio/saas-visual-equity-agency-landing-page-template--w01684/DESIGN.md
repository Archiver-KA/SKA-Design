# Design system — SaaS Visual Equity Agency Landing Page Template

`SN-W01684` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark two-column layout: a fixed left sidebar with a small uppercase wordmark and status line, and a large sans headline on the right. The headline is white, then fades to grey for the last line, and one hot pink-red (#f60261) appears on the primary button and the wordmark accent. Depth comes from near-black surfaces and thin borders rather than shadows.

**Mood:** premium, stark, technical, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0d10` | Page ground |
| Surface | `#1a1d21` | Cards, panels, raised areas |
| Text | `#f2f2f2` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#2a2e35` | Hairlines, dividers, outlines |
| Accent | `#f60261` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#2a2e35` · `#ffffff` · `#f60261` · `#737373` · `#a3a3a3` · `#1a1d21` · `#0b0d10` · `#525252` · `#404040` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-accent hover:bg-white hover:text-obsidian focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian focus:ring-accent rounded-sm uppercase tracking-wider">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0d10;
  --color-surface: #1a1d21;
  --color-text: #f2f2f2;
  --color-muted: #737373;
  --color-border: #2a2e35;
  --color-accent: #f60261;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0d10',
    surface: '#1a1d21',
    ink: '#f2f2f2',
    muted: '#737373',
    line: '#2a2e35',
    accent: '#f60261',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pink-red (#f60261) only on the primary button and the wordmark accent.
- **Do:** Set headlines in heavy sans, with the last line in grey (#737373) for emphasis.
- **Do:** Keep a fixed sidebar with thin dividers for navigation and status text.
- **Don't:** Don't add drop shadows; separate surfaces with the border (#2a2e35).
- **Don't:** Don't use the green accent2 (#10b981) in this layout.
- **Don't:** Don't put light backgrounds behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
