# Design system — Women's Wellness Coaching Landing Page Template

`SN-W02567` · healthcare · light mode · Sinera Atlas theme `calm` · language `ru`

## Direction

A warm cream page (#f2ede4) with dark brown serif-led headlines, where one phrase is set in italic orange (#d97904) as the single highlight. The primary button is an orange gradient and the secondary is a pale raised button, so the page feels soft, personal and human. Rounded shapes and generous spacing keep the tone gentle rather than clinical.

**Mood:** warm, gentle, personal, soft, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2ede4` | Page ground |
| Surface | `#d1c7b7` | Cards, panels, raised areas |
| Text | `#4a3f35` | Headings and primary copy |
| Muted text | `#4a3f35` | Secondary copy, captions |
| Border | `#d1c7b7` | Hairlines, dividers, outlines |
| Accent | `#d97904` | Primary action and highlights |

Palette by frequency of use: `#d97904` · `#f2ede4` · `#4a3f35` · `#d1c7b7` · `#f29f05` · `#8a6d4b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Cormorant Garamond, Outfit
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 18px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_10px_20px_-10px_rgba(217,121,4,0.5)]`, `shadow-[0_15px_25px_-10px_rgba(217,121,4,0.6)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-16`, `gap-10`, `gap-x-12`

**Primary button**

```html
<a class="w-full sm:w-auto py-4 px-10 rounded-2xl bg-gradient-to-r from-[#F29F05] to-[#D97904] text-[#F2EDE4] font-medium text-lg shadow-[0_10px_20px_-10px_rgba(217,121,4,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(217,121,4,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] flex justify-center items-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Awards / press (`awards-press`)
5. About (`about`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2ede4;
  --color-surface: #d1c7b7;
  --color-text: #4a3f35;
  --color-muted: #4a3f35;
  --color-border: #d1c7b7;
  --color-accent: #d97904;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2ede4',
    surface: '#d1c7b7',
    ink: '#4a3f35',
    muted: '#4a3f35',
    line: '#d1c7b7',
    accent: '#d97904',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set one phrase of each headline in italic orange (#d97904) for emphasis
- **Do:** Use the orange gradient only on the primary button and keep the secondary button pale
- **Do:** Keep text in the warm brown (#4a3f35) on the cream ground
- **Don't:** Don't use pure black for text; the warm brown carries the tone
- **Don't:** Don't colour more than one phrase per headline in orange; the highlight loses its effect
- **Don't:** Don't use cold greys or blue for surfaces; the palette stays in cream and browns

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
