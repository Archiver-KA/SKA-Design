# Design system — Senior Product Designer Portfolio Template

`SN-W02221` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, quiet product-designer intro: a bold white sans headline on near-black, with a soft violet glow behind the top half as the main colour. Body copy is slate grey, and the buttons are a white solid and a plain text link, so the glow carries the atmosphere while the type stays neutral. The violet is used as light, not fill, which keeps the case studies below in focus.

**Mood:** dark, atmospheric, restrained, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6248ff` | Primary action and highlights |
| Second accent | `#ff5a30` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#050505` · `#6248ff` · `#ff5a30` · `#0a0a0a` · `#cbd5e1` · `#000000` · `#64748b` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-black transition-all hover:bg-slate-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6248ff;
  --color-accent-2: #ff5a30;
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
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6248ff',
    accent2: '#ff5a30',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#050505) with a soft violet (#6248ff) glow behind the headline
- **Do:** Set the headline in bold white sans and body copy in slate (#94a3b8)
- **Do:** Use the white solid button as the primary action and a text link for secondary
- **Don't:** Don't put the violet glow behind body text
- **Don't:** Don't use the orange (#ff5a30) in the hero
- **Don't:** Don't add hard borders around the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
