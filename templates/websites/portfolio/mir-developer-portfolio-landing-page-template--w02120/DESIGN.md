# Design system — Mir Developer Portfolio Landing Page Template

`SN-W02120` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, near-black developer portfolio (#050505) with white Inter headlines at very large size and a grey subtitle line for contrast. Emerald (#10b981) is the one colour visible on the first screen, used as a small status dot. Panels use blurred translucent glass over a faint dotted starfield, so depth comes from transparency rather than shadows.

**Mood:** dark, futuristic, tech, minimal, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#050505` · `#10b981` · `#52525b` · `#27272a` · `#6366f1` · `#34d399` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 16px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_-100px_200px_rgba(0,0,0,1)]`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all text-xs font-medium tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #6366f1;
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
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at display size, with the grey subtitle beneath for contrast.
- **Do:** Use emerald (#10b981) only for status markers and one call-to-action accent per section.
- **Do:** Build cards as translucent glass with a thin border over the #050505 ground.
- **Don't:** Don't use drop shadows; depth comes from blur and transparency.
- **Don't:** Don't add a second bright accent beside emerald in the hero.
- **Don't:** Don't move the page onto a light background; the glass effect depends on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
