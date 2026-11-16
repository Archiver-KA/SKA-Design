# Design system — Dental Consulting Landing Page Template

`SN-W02363` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A stark dark-mode consulting page built from near-black surfaces and off-white type, with no accent colour visible on the first screen. The headline is large white sans-serif that steps down to a muted grey on its final line, so emphasis comes from tone rather than colour. Content is organised in short, plain statements and a quiet grid of checkmarked benefits, which reads as authoritative and direct.

**Mood:** austere, authoritative, direct, monochrome, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#fafafa` | Primary action and highlights |

Palette by frequency of use: `#27272a` · `#18181b` · `#d4d4d8` · `#fafafa` · `#52525b` · `#a1a1aa` · `#09090b` · `#71717a` · `#e4e4e7` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 36px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-x-3`, `gap-x-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-x-2 bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #fafafa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#fafafa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at a large size, with the last line in the muted grey (#71717a).
- **Do:** Keep all surfaces on the near-black ground (#09090b) and the card surface (#18181b).
- **Do:** Use the off-white (#fafafa) for the primary button and key headline words.
- **Don't:** Don't introduce a brand colour; the page stays monochrome.
- **Don't:** Don't use pill shapes for the main buttons on this page.
- **Don't:** Don't lighten the background to a mid grey, which removes the contrast the headline depends on.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
