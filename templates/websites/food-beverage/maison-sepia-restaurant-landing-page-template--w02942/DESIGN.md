# Design system — Maison Sépia Restaurant Landing Page Template

`SN-W02942` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark, editorial French restaurant page on a near-black ground (#1d1d1a), with an off-white serif headline and small monospaced caps for eyebrows and nav. The cream pill buttons (#eee9df) are the only bright shapes, and they carry the booking actions. The page reads as quiet, print-like and restrained.

**Mood:** editorial, restrained, french, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1d1d1a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f5f1e8` | Headings and primary copy |
| Muted text | `#62694f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d6c4a2` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#20211d` · `#1d1d1a` · `#000000` · `#eee9df` · `#d6c4a2` · `#f5f1e8` · `#f7f2e9` · `#f4efe5` · `#191a17`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Mono
- **Body:** DM Mono
- **Loaded families:** DM Mono, Inter, Italiana
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 12px
- **Weights in use:** light
- **Letter spacing:** `tracking-tight`, `tracking-[0.16rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.75rem]` (1.75rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="hidden items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.16rem] backdrop-blur-md transition-colors hover:bg-white hover:text-[#1d1d1a] sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Testimonials (`testimonials`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1d1d1a;
  --color-surface: #ffffff;
  --color-text: #f5f1e8;
  --color-muted: #62694f;
  --color-border: #ffffff;
  --color-accent: #d6c4a2;
  --font-display: "DM Mono", sans-serif;
  --font-body: "DM Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1d1d1a',
    surface: '#ffffff',
    ink: '#f5f1e8',
    muted: '#62694f',
    line: '#ffffff',
    accent: '#d6c4a2',
  },
  fontFamily: { display: ['DM Mono'], sans: ['DM Mono'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large off-white serif, with the second line sitting lower
- **Do:** Set eyebrows and nav labels in small monospaced caps with wide tracking
- **Do:** Use the cream pill button (#eee9df) for the primary booking action
- **Don't:** Don't use a light page ground; the ground is dark.
- **Don't:** Don't set headlines in the monospaced face; they are serif.
- **Don't:** Don't use the cream fill for more than the primary action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
