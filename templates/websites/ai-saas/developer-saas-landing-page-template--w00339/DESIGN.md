# Design system — Developer SaaS Landing Page Template

`SN-W00339` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black developer page where the headline is white sans and the technology names are set in grey italic serif, a contrast that marks the stack. The brand mark is a small orange-red logo, the only colour on the page, and a mono-style install command under the copy serves as the call to action. A faint grid behind the hero adds texture without competing with the type.

**Mood:** technical, minimal, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff4f30` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#4ade80` · `#c084fc` · `#050505` · `#ff4f30` · `#60a5fa` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** EB Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="w-full md:w-auto h-12 px-6 bg-white text-black mono text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Code / terminal (`code-terminal`)
6. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ff4f30;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ff4f30',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set technology names in grey italic serif inside sans headlines
- **Do:** Use the orange-red (#ff4f30) for the brand mark and at most one highlight
- **Do:** Put a copyable terminal command under the hero copy
- **Don't:** Don't add colour to headlines; they stay white
- **Don't:** Don't flatten the grid texture to plain black
- **Don't:** Don't use the violet or green from the palette as accents

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
