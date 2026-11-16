# Design system — Therapy and Mental Health Services Template

`SN-W02542` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, editorial therapy page on a cream ground (#faf5ec) with a large serif headline in dark brown (#372f28), where the middle phrase is set in italic. Terracotta (#a0532f) runs the buttons and the ring of the hero emblem, and a sage tone supports it, so the palette stays earthy. The stance is humane and literary rather than clinical, and the round botanical mark is the recognisable device.

**Mood:** humane, earthy, literary, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf5ec` | Page ground |
| Surface | `#c9d2c1` | Cards, panels, raised areas |
| Text | `#372f28` | Headings and primary copy |
| Muted text | `#6e6156` | Secondary copy, captions |
| Border | `#fffdf9` | Hairlines, dividers, outlines |
| Accent | `#a0532f` | Primary action and highlights |

Palette by frequency of use: `#a0532f` · `#c9d2c1` · `#93a08d` · `#fffdf9` · `#e3a47f` · `#372f28` · `#c36c46` · `#6e6156` · `#f1e7d6` · `#faf5ec`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Fraunces
- **Loaded families:** Fraunces, Jost
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[42%_58%_56%_44%/46%_42%_58%_54%]` (42%_58%_56%_44%/46%_42%_58%_54%), `rounded-[1.75rem_.4rem_1.75rem_1.75rem]` (1.75rem_.4rem_1.75rem_1.75rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-[#A0532F]/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="rounded-full bg-[#C36C46] px-5 py-2.5 text-sm font-medium text-[#FFFDF9] shadow-lg shadow-[#A0532F]/20 transition hover:-translate-y-0.5 hover:bg-[#A0532F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A0532F] focus-visible:ring-offset-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Call to action (`cta`)
6. Team (`team`)
7. Articles (`blog-articles`)
8. Logo cloud (`logo-cloud`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #faf5ec;
  --color-surface: #c9d2c1;
  --color-text: #372f28;
  --color-muted: #6e6156;
  --color-border: #fffdf9;
  --color-accent: #a0532f;
  --font-display: "Fraunces", serif;
  --font-body: "Fraunces", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf5ec',
    surface: '#c9d2c1',
    ink: '#372f28',
    muted: '#6e6156',
    line: '#fffdf9',
    accent: '#a0532f',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Fraunces'] },
} }
```

## Do and don't

- **Do:** Set the italic middle phrase of each headline in the serif
- **Do:** Use terracotta (#a0532f) for the primary button and the ring accent only
- **Do:** Keep the hero emblem as a circular botanical mark inside a terracotta ring
- **Don't:** Don't use the sage (#c9d2c1) for text; it is a surface tone
- **Don't:** Don't add cool blues or greys; the palette is warm
- **Don't:** Don't set body copy in italic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
