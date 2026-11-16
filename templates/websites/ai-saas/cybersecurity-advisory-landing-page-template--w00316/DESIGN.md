# Design system — Cybersecurity Advisory Landing Page Template

`SN-W00316` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical advisory page on blue-black [#12141a], with a large white headline where the middle word is pale blue [#9ed8ff]. A faint oversized word sits behind the hero, and a small telemetry card on the right lists coordinates and status as label-and-value rows. The pale blue is the only accent, so the page reads as a field-operations console.

**Mood:** technical, console-like, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#12141a` | Page ground |
| Text | `#f5f7fa` | Headings and primary copy |
| Border | `#171a1f` | Hairlines, dividers, outlines |
| Accent | `#9ed8ff` | Primary action and highlights |
| Second accent | `#cfae6e` | Supporting highlights |

Palette by frequency of use: `#171a1f` · `#9ed8ff` · `#cfae6e` · `#7d8794` · `#f5f7fa` · `#050505` · `#12141a` · `#9aa6b5` · `#b8c0cc` · `#d6c29a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Michroma
- **Scale (largest breakpoint):** h2 12px · h3 18px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 sm:px-5 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Bento grid (`bento-grid`)
7. Process / steps (`how-it-works`)
8. Feature grid (`features`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #12141a;
  --color-text: #f5f7fa;
  --color-border: #171a1f;
  --color-accent: #9ed8ff;
  --color-accent-2: #cfae6e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#12141a',
    ink: '#f5f7fa',
    line: '#171a1f',
    accent: '#9ed8ff',
    accent2: '#cfae6e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the middle headline word in pale blue (#9ed8ff) and the rest white
- **Do:** Keep the telemetry card as small label-and-value rows inside a thin-bordered card
- **Do:** Keep the oversized background word very faint
- **Don't:** Don't use the gold (#cfae6e) in the hero
- **Don't:** Don't use the pale blue as a page background
- **Don't:** Don't add a second accent beside the pale blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
