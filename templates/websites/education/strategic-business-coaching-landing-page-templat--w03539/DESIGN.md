# Design system — Strategic Business Coaching Landing Page Template

`SN-W03539` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

DUGIC uses a black ground with bold white sans-serif headlines in a stark, high-contrast setup. Yellow (#ffd369) is the single accent, used on the primary button and the proof callout, and the last line of the headline is set in yellow. A large dark-toned portrait sits beside the copy, and small uppercase labels mark the proof points. The tone is blunt and direct, matching the copy.

**Mood:** blunt, high-contrast, bold, direct, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffd369` | Primary action and highlights |
| Second accent | `#ffd369` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#ef4444` · `#000000` · `#d4d4d4` · `#404040` · `#ffd369` · `#050505` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)]`, `shadow-black`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="px-8 py-4 bg-gold-gradient text-charcoal-900 font-semibold rounded-lg hover:shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Services (`services`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ffd369;
  --color-accent-2: #ffd369;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ffd369',
    accent2: '#ffd369',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use yellow (#ffd369) for the primary button and one highlight per section
- **Do:** Set headlines in bold white sans-serif with the final phrase in yellow
- **Do:** Show portraits as large, dark-toned photos beside the copy
- **Don't:** Don't use light backgrounds for hero sections
- **Don't:** Don't add soft pastel accents beside the yellow
- **Don't:** Don't soften headlines with a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
