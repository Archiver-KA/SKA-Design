# Design system — UI/UX Learning Platform Landing Page Template

`SN-W03551` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Tharwat UX is a dark, editorial page where the headline pairs white sans-serif with a rose italic serif for the key phrase. The rose (#be185d) appears in the emphasis, the primary button and a faint glow behind the headline, so it is the one brand colour. The hero is centred on a near-black ground with generous space around the copy.

**Mood:** editorial, dark, focused, high-contrast, rose

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#be185d` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#18181b` · `#d4d4d8` · `#27272a` · `#0a0a0a` · `#050505` · `#3f3f46` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(190,24,93,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-white text-xs font-medium hover:border-brand-pink/50 hover:bg-zinc-800 transition-all group">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Testimonials (`testimonials`)
6. Team (`team`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #be185d;
  --color-accent-2: #22c55e;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#be185d',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in rose italic serif (#be185d)
- **Do:** Use rose for the primary button and the background glow only
- **Do:** Keep the hero centred, with a white headline on near-black
- **Don't:** Don't add a second brand colour
- **Don't:** Don't set the emphasis phrase in bold sans-serif
- **Don't:** Don't place light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
