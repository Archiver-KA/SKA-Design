# Design system — Nexus AI Automation Landing Page Template

`SN-W00572` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained, near-black hero (#09090b) with a centred headline in white that slides into a grey gradient on its second line. A small pill tag announces a new feature, and the action row is a solid white pill beside a dark outline. Colour is nearly absent, and violet appears only in the logo mark, so the page reads as developer-focused and quiet.

**Mood:** restrained, dark, clear, developer-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#71717a` · `#ffffff` · `#d4d4d8` · `#f4f4f5` · `#27272a` · `#6366f1` · `#18181b` · `#10b981` · `#3f3f46` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-black/40`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="w-full py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-medium rounded-md transition-colors shadow-lg shadow-indigo-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Code / terminal (`code-terminal`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with the second line in a grey gradient
- **Do:** Use the solid white pill for the primary action and a dark outline for the secondary
- **Do:** Keep violet (#6366f1) to the logo mark and small tags
- **Don't:** Don't use violet for headlines or buttons
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't add a light background to the hero; it stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
