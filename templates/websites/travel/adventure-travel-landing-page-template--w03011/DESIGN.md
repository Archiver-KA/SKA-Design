# Design system — Adventure Travel Landing Page Template

`SN-W03011` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black mountain page where a large sans-serif headline fades from white to grey, centred over a dim photographic backdrop. Actions are high-contrast: a solid white pill for the primary action beside a ghost outline button. Emerald (#10b981) appears only as a small status dot, so the page reads as monochrome with one cool note.

**Mood:** monochrome, rugged, cinematic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#10b981` · `#737373` · `#262626` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#404040` · `#064e3b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden sm:flex items-center justify-center px-4 py-2 text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 transition-all rounded shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #1e3a8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline in white-to-grey gradient Inter at display size
- **Do:** Use white pill buttons for the primary action and outline ghosts for secondary
- **Do:** Limit emerald (#10b981) to status dots and small badges
- **Don't:** Don't add a coloured hero background; the page stays near-black
- **Don't:** Don't use the dark blue accent (#1e3a8a) for text or buttons
- **Don't:** Don't set body copy in pure white; use the light grey text (#d4d4d4)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
