# Design system — Auto Wrap Services Landing Page Template

`SN-W03824` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A near-black hero where the first headline line is white uppercase and the second line is set in lime (#bbcf1d), which forms the main contrast. The lime also fills the primary button and the scrolling strip of service names at the bottom, so it works as one signalling colour. Labels are small, widely spaced uppercase, and the page uses the dark ground throughout the hero.

**Mood:** bold, urban, high-energy, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#222222` | Hairlines, dividers, outlines |
| Accent | `#bbcf1d` | Primary action and highlights |

Palette by frequency of use: `#bbcf1d` · `#222222` · `#0a0a0a` · `#a0a0a0` · `#ffffff` · `#111111` · `#d4e34a` · `#000000` · `#050505` · `#666666`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Orbitron
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-none` (0)
- **Shadows:** `shadow-[0_10px_30px_rgba(187,207,29,0.08)]`, `shadow-[0_0_30px_rgba(187,207,29,0.3)]`, `shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[1100px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 whitespace-nowrap text-xs font-orbitron font-semibold uppercase tracking-[0.2em] bg-[#bbcf1d] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#d4e34a] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(187,207,29,0.15)] hover:shadow-[0_0_30px_rgba(187,207,29,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #666666;
  --color-border: #222222;
  --color-accent: #bbcf1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#666666',
    line: '#222222',
    accent: '#bbcf1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in lime (#bbcf1d), in uppercase.
- **Do:** Use the lime for the primary button and the scrolling strip only.
- **Do:** Keep labels small, uppercase and widely spaced.
- **Don't:** Don't set body copy in lime.
- **Don't:** Don't place a light background behind the hero.
- **Don't:** Don't use lime for large background areas.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
