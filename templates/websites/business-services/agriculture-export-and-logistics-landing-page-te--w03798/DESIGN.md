# Design system — Agriculture Export & Logistics Landing Page Template

`SN-W03798` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A cream landing page with a large dark headline in which one word per line is set in brown italic (#b45309), a device the page repeats for emphasis. The hero is open and airy, with short copy in a narrow column, two dark pill buttons, and a pale yellow image panel on the right. The restrained palette of cream, near-black and brown gives an organic, premium feel.

**Mood:** organic, premium, airy, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf8f4` | Page ground |
| Surface | `#fffbeb` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |
| Second accent | `#a7f3d0` | Supporting highlights |

Palette by frequency of use: `#78716c` · `#a8a29e` · `#1c1917` · `#faf8f4` · `#b45309` · `#57534e` · `#e7e5e4` · `#292524` · `#d6d3d1` · `#fcd34d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Fraunces
- **Scale (largest breakpoint):** h1 72px · h2 48px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-14`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-stone-900 text-[#faf8f4] text-sm px-4 py-2 rounded-full hover:bg-stone-800 flex items-center gap-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Logo cloud (`logo-cloud`)
5. Listings (`listings`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf8f4;
  --color-surface: #fffbeb;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #b45309;
  --color-accent-2: #a7f3d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf8f4',
    surface: '#fffbeb',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#b45309',
    accent2: '#a7f3d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large dark type and mark one word per headline in brown italic (#b45309).
- **Do:** Use dark pill buttons for the main actions and keep the page on cream (#faf8f4).
- **Do:** Keep image panels soft-edged, with a pale yellow wash in place of hard frames.
- **Don't:** Don't add more than one emphasis colour to a headline.
- **Don't:** Don't set the hero copy wider than a narrow column.
- **Don't:** Don't use bright green or blue on the cream ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
