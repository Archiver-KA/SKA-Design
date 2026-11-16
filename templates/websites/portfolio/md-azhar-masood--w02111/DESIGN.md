# Design system — MD AZHAR MASOOD

`SN-W02111` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black, quiet portfolio opener with a large serif name centred in light silver [#e2e8f0] and a one-line italic subtitle in grey beneath it. A tiny widely tracked label sits above the name, and a faint smoky texture lies behind the type. The nav is two small labels in the corners, so the name and the italic line carry the page.

**Mood:** quiet, dark, literary, understated, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050608` | Page ground |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#d4c4a8` · `#ffffff` · `#475569` · `#e2e8f0` · `#64748b` · `#94a3b8` · `#050608` · `#cbd5e1` · `#1e293b` · `#08090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 12px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_30px_rgba(212,196,168,1)]`
- **Content width:** `max-w-screen-xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="relative flex items-center justify-between gap-12 bg-[#08090b] border border-white/10 px-8 py-6 rounded-sm hover:border-[#d4c4a8]/30 transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. App download (`app-download`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050608;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050608',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the name in a large serif in light silver (#e2e8f0) on the dark ground.
- **Do:** Set the one-line subtitle in grey italic beneath the name.
- **Do:** Keep the nav to two small labels in the top corners.
- **Don't:** Don't add colour; the page is silver and grey on near-black.
- **Don't:** Don't set the name in a sans-serif.
- **Don't:** Don't add imagery to the opener; the first screen is type only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
