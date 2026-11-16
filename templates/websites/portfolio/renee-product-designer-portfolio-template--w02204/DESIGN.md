# Design system — Renee Product Designer Portfolio Template

`SN-W02204` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The page is light, with a pale grey field and soft blurred blue and green blobs behind the hero. Headlines are set in a plain grotesque, with the lead statement in black and the supporting clause in mid-grey. Colour lives only in the blurred background, so the typography stays neutral and the work carries the page.

**Mood:** airy, neutral, soft, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e6e6e6` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#e6e6e6` · `#525252` · `#404040` · `#171717` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 60px · h2 18px · h3 18px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full py-2.5 rounded-xl bg-black text-white text-sm font-medium tracking-tight hover:bg-black/80 transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Sign-in form (`auth-form`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e6e6e6;
  --color-text: #000000;
  --color-muted: #525252;
  --color-border: #000000;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e6e6e6',
    ink: '#000000',
    muted: '#525252',
    line: '#000000',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the hero on the pale grey ground (#e6e6e6) with black headline text
- **Do:** Use the blurred blobs only behind the hero, never behind body text
- **Do:** Set the supporting clause in mid-grey (#525252) at a lighter weight
- **Don't:** Don't set this page on a dark ground; it is light
- **Don't:** Don't add more blobs to the lower sections
- **Don't:** Don't use a black pill button with a coloured label

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
