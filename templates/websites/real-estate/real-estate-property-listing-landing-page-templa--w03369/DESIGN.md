# Design system — Real Estate Property Listing Landing Page Template

`SN-W03369` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A clean, utilitarian listing page on white with thin grey dividers and a sticky agent card in the right column. Form fields are underlined rather than boxed, and the primary button is black with white text. Section labels are small uppercase grey, and a large grey media placeholder with a file icon sits below the listing details.

**Mood:** clean, functional, monochrome, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#a1a1aa` · `#e4e4e7` · `#f4f4f5` · `#3f3f46` · `#52525b` · `#000000` · `#71717a` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full mt-4 bg-zinc-900 text-white py-4 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Sidebar (`sidebar`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e4e4e7;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e4e4e7',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use black filled buttons and underlined form fields on white
- **Do:** Keep section labels small, uppercase and grey
- **Do:** Keep the agent card in a sidebar column beside the listing details
- **Don't:** Don't add accent colours; the page is black, white and grey
- **Don't:** Don't box the form fields; use underlines
- **Don't:** Don't use rounded boxed cards for the listing details; use plain dividers

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
