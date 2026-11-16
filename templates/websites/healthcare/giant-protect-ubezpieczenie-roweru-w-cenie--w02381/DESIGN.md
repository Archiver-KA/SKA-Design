# Design system — Giant Protect ubezpieczenie roweru w cenie

`SN-W02381` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A plain, high-contrast product hero on white, with a large heavy sans-serif headline in near-black and short grey supporting copy. Black pill buttons set the calls to action, and a soft white glow fills the top of the section. There is no accent colour on the first screen; the page relies on black, white and grey and on the weight of the type.

**Mood:** plain, high-contrast, confident, minimal, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#71717a` · `#ffffff` · `#09090b` · `#18181b` · `#e4e4e7` · `#f4f4f5` · `#fafafa` · `#27272a` · `#a1a1aa` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-zinc-900/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs font-medium bg-zinc-950 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
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
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy Inter with tight tracking, centred.
- **Do:** Use black pill buttons (#09090b) for the primary action and the outlined pill for the second.
- **Do:** Keep supporting copy in mid grey (#71717a) at a readable size.
- **Don't:** Don't add an accent colour to the hero; the page is monochrome.
- **Don't:** Don't use drop shadows on the pill buttons.
- **Don't:** Don't set the headline in a light weight; the contrast of heavy type is the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
