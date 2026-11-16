# Design system — Web Designer Portfolio Landing Page Template

`SN-W02294` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with two soft coloured glows: teal (#81d8d0) at the top left behind the name and blue at the bottom right. The name is set large in white and grey sans, and the right side shows dark translucent cards with toggles and stats. Glow and glass do the depth, with one white primary button in the hero.

**Mood:** dark, luminous, fluid, precise, techy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#81d8d0` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#81d8d0` · `#000000` · `#111111` · `#1e3a8a` · `#2563eb` · `#312e81` · `#6366f1` · `#064e3b` · `#581c87`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-[#81D8D0] text-black text-xs font-medium hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #81d8d0;
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
    background: '#000000',
    surface: '#111111',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#81d8d0',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #81d8d0 as the glow behind the name and for small details
- **Do:** Build cards as dark translucent glass with thin borders
- **Do:** Keep one white primary button per hero
- **Don't:** Don't add a second glow colour over the name
- **Don't:** Don't use opaque coloured cards on the black ground
- **Don't:** Don't make the glow stronger than the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
