# Design system — Vietnamese Restaurant Landing Page Template

`SN-W03006` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black green stage with large white Inter headlines, where the second line of the headline drops to muted grey for contrast. Emerald (#10b981) marks the badge, the primary button and small status dots, while amber (#f59e0b) appears only on prices. Floating rounded glass cards over photography give the first screen its character.

**Mood:** night-dining, glassy, restrained, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a07` | Page ground |
| Surface | `#151515` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#10b981` · `#6b7280` · `#f59e0b` · `#34d399` · `#151515` · `#000000` · `#60a5fa` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors text-gray-300 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050a07;
  --color-surface: #151515;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a07',
    surface: '#151515',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white Inter at display size, with the secondary phrase in muted grey (#9ca3af)
- **Do:** Use emerald (#10b981) for the primary button and status accents only
- **Do:** Show prices in amber (#f59e0b) so they stand apart from the emerald interface
- **Don't:** Don't put a light background behind the hero; the page depends on near-black
- **Don't:** Don't use emerald for body text or large filled areas
- **Don't:** Don't drop the rounded pills and glass panels, which define the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
