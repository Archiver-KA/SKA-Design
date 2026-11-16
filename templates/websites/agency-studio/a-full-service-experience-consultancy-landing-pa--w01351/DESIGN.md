# Design system — A Full-Service Experience Consultancy Landing Page

`SN-W01351` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed, desaturated photograph under a dark overlay carries the first screen, and the headline sits on it in large Inter at light and medium weights. The second line of the headline is set in a faded grey, so the sentence changes tone mid-line rather than changing colour. No accent colour is visible on this screen; the interface is monochrome and the imagery supplies the colour.

**Mood:** monochrome, editorial, calm, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#09090b` · `#a1a1aa` · `#18181b` · `#71717a` · `#e4e4e7` · `#52525b` · `#fafafa` · `#000000` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Logo cloud (`logo-cloud`)
5. About (`about`)
6. Listings (`listings`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put a dark, desaturated photograph behind the hero and keep the overlay dark enough for white text.
- **Do:** Set headlines in Inter at large size, light to medium weight, with the second line in muted grey.
- **Do:** Keep the interface monochrome and let photography carry the colour.
- **Don't:** Don't add a saturated accent colour to buttons or headings.
- **Don't:** Don't set the hero headline in a heavy weight; this style stays light.
- **Don't:** Don't place a full-width photograph behind text without an overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
