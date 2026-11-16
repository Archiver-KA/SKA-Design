# Design system — Nexsales B2B SaaS Landing Page Template

`SN-W00569` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, modern B2B hero on near-black (#030303) with a slim announcement strip across the top. The headline is white sans-serif on the first line and teal (#2dd4bf) italic serif on the second, a deliberate contrast that the rest of the page echoes. The teal fills the primary button, and an unlit dashboard frame sits below the buttons as the product proof.

**Mood:** modern, dark, crisp, b2b

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2dd4bf` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#111111` · `#d4d4d4` · `#050505` · `#262626` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="bg-[#e5e5e5] hover:bg-white text-black px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Stats band (`stats`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)
11. Newsletter signup (`newsletter`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #111111;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #2dd4bf;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#111111',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#2dd4bf',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in teal (#2dd4bf) italic serif beneath the white sans line
- **Do:** Use the solid teal button for the demo action and an outline for the workflow link
- **Do:** Keep the announcement strip to one line at the top
- **Don't:** Don't use teal for body text; it belongs to the headline and the primary button
- **Don't:** Don't drop the italic serif; it is what identifies the headline
- **Don't:** Don't add a light background to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
