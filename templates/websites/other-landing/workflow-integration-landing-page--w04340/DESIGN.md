# Design system — Workflow Integration Landing Page

`SN-W04340` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light SaaS landing hero on white, where the second headline line is set in a violet gradient [#9333ea]. An email field and a solid violet button sit side by side, with small trust badges beneath. Integration cards on a violet panel follow lower on the page, so violet is the single brand colour throughout.

**Mood:** modern, clean, confident, bright, saas

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#e5e7eb` · `#4b5563` · `#d1d5db` · `#9333ea` · `#9ca3af` · `#4ade80` · `#2563eb` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Satoshi
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Satoshi
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs lg:text-sm font-medium px-3 lg:px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #9333ea;
  --color-accent-2: #2563eb;
  --font-display: "Satoshi", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#9333ea',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Satoshi'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in violet (#9333ea) only
- **Do:** Use the solid violet button for the main email call to action
- **Do:** Keep trust badges small and muted below the form
- **Don't:** Don't use violet for body copy or plain links
- **Don't:** Don't place the email field on a dark background
- **Don't:** Don't add a second brand colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
