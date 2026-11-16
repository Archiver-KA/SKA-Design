# Design system — Medspa Landing Page Template

`SN-W02477` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A photograph-led hero on a dark, grey-green ground, with white serif headline text and the last line set in gold italic. A dark green pill button is the primary action, and a thin green announcement bar sits above the navigation. Gold is the only warm accent and is confined to the italic line, which gives the page a spa-like tone.

**Mood:** spa-like, atmospheric, premium, soft, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#466c48` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#466c48` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#466c48` · `#78716c` · `#cf963f` · `#f5f5f4` · `#1c1917` · `#57534e` · `#fafaf9` · `#a8a29e` · `#fdfcfb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full bg-[#CF963F] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#b88536] transition-colors shadow-lg mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Services (`services`)
6. About (`about`)
7. Map / location (`map-location`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #466c48;
  --color-border: #f5f5f4;
  --color-accent: #466c48;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#466c48',
    line: '#f5f5f4',
    accent: '#466c48',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark green (#466c48) for the primary button only
- **Do:** Set the headline in Playfair Display, with the last line in gold italic (#cf963f)
- **Do:** Keep the thin green announcement bar above the navigation and nowhere else
- **Don't:** Don't use gold for buttons or large fills
- **Don't:** Don't set body copy in gold
- **Don't:** Don't add extra accent colours to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
