# Design system — Pat Budi Perkasa EN

`SN-W02149` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark agency page on near-black (#050505) with a very large sans headline in two tones: 'Digital' in white and 'Reality.' in a grey fade. A small status pill with an indigo dot sits above it, and a single white pill button leads the action. The contrast between solid white and the grey fade is the device, with no other colour in view.

**Mood:** stark, bold, futuristic, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#52525b` · `#27272a` · `#050505` · `#6366f1` · `#818cf8` · `#000000` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_-50px_100px_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-xs font-medium text-white">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large in white, with the second word in a grey fade.
- **Do:** Use a single white pill as the primary button and keep the nav as plain text.
- **Do:** Keep the status pill small, with its dot in indigo (#6366f1).
- **Don't:** Don't set the page on white; the first screen is black.
- **Don't:** Don't add a second accent beside the indigo dot.
- **Don't:** Don't set the headline in a light weight; it needs the heavy sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
