# Design system — Restaurant Canada Best 

`SN-W02973` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark mid-page section holds rounded-2xl panels with a short service list and a wide atmosphere photograph with a small pill label. The headline is large Inter, with the second half in a lighter grey. The page leans on card structure and photography more than on accent colour.

**Mood:** card-led, modest, structured, photo-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#15803d` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f5f4` · `#1c1917` · `#d6d3d1` · `#44403c` · `#78716c` · `#57534e` · `#a8a29e` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2.5 rounded-full font-semibold text-sm hover:bg-stone-200 transition font-geist group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Bento grid (`bento-grid`)
5. Map / location (`map-location`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #15803d;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#15803d',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep content in rounded-2xl cards, with a photo tile for atmosphere.
- **Do:** Set headlines in Inter at a large size with tight tracking.
- **Do:** Use small pill labels over photographs for tags such as the audience.
- **Don't:** Don't set these sections on a light ground; they are dark.
- **Don't:** Don't add accent colours to these sections, which use almost none.
- **Don't:** Don't drop the pill labels off the photo tiles; they carry the meaning.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
