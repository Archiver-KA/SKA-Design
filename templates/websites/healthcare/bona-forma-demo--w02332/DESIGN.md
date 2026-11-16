# Design system — Bona Forma Demo

`SN-W02332` · healthcare · dark mode · Sinera Atlas theme `calm` · language `ca`

## Direction

A stark dark gym page on near-black (#0a0a0a) with white text and no hue. The headline is bold Inter, centred, with the final word set in a grey gradient that fades toward the edge. Buttons are pills: the primary is solid white with dark text and the secondary is an outlined ghost, so the contrast is all white on black.

**Mood:** stark, monochrome, bold, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#0a0a0a` · `#737373` · `#a3a3a3` · `#171717` · `#d4d4d4` · `#404040` · `#e5e5e5` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Manrope
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 40px · h3 22px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(217,70,239,0.3)]`, `shadow-[0_0_10px_rgba(217,70,239,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 text-[14px] font-semibold px-5 py-2 rounded-full transition-colors duration-300 ease-in-out">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#262626',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Make the primary button solid white with near-black text and the secondary a ghost outline.
- **Do:** Set headlines in bold Inter, centred, with the final word in a grey gradient.
- **Do:** Keep the page to black, white and greys; there is no accent hue.
- **Don't:** Don't add a colour accent; the design depends on white on black.
- **Don't:** Don't use light section backgrounds.
- **Don't:** Don't use square buttons; the controls are pills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
