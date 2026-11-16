# Design system — Digital Bloom Consulting

`SN-W01537` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with a black headline in two tones, where the middle phrase is set in light grey so emphasis comes from tone rather than colour. The primary action is a black pill with a white label, and the secondary is a thin outline. Amber (#b45309) appears only in a small eyebrow dot, so colour is almost absent.

**Mood:** quiet, light, typographic, warm-neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#d4d4d4` · `#e5e5e5` · `#737373` · `#a3a3a3` · `#262626` · `#f5f5f5` · `#fafafa` · `#b45309`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 text-xs font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Logo cloud (`logo-cloud`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #b45309;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in black sans-serif with one phrase in light grey for emphasis
- **Do:** Use black pill buttons (#171717) for primary actions and thin outlines for secondary
- **Do:** Keep amber (#b45309) to small eyebrow markers
- **Don't:** Don't use amber for buttons or headline text
- **Don't:** Don't add decorative imagery to the hero
- **Don't:** Don't use more than two greys in one headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
