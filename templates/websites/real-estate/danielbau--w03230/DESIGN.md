# Design system — DANIELBAU

`SN-W03230` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photograph-led architecture hero: a full-bleed timber house at dusk with very large, thin uppercase words laid over it in white, partly transparent. The language picker sits in a dark translucent panel on the right, and the header is a small wordmark on the image. The page relies on the photograph and type rather than colour.

**Mood:** architectural, photographic, restrained, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e3e1dc` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#4b5563` · `#1a1a1a` · `#e3e1dc` · `#374151` · `#6b7280` · `#111111` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1800px]`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-10`, `gap-16`, `gap-12`

**Primary button**

```html
<a class="text-sm font-medium text-gray-600 hover:text-[var(--c-blue)] hover:bg-white/50 p-2 rounded transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e3e1dc;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e3e1dc',
    ink: '#000000',
    muted: '#4b5563',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Lay large thin uppercase headline words over a full-bleed architecture photograph.
- **Do:** Keep the language picker in a dark translucent panel at the top right.
- **Do:** Use the photograph, not colour, as the main visual; keep the interface neutral.
- **Don't:** Don't add an accent colour; no accent appears on the first screen.
- **Don't:** Don't set the headline words in solid colour blocks; they sit over the image.
- **Don't:** Don't put a busy background behind the headline; the photograph must stay calm there.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
