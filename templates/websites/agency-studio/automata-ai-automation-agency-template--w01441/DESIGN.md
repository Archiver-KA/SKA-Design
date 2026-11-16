# Design system — Automata AI Automation Agency Template

`SN-W01441` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#0a0b0d]) with raised panels in [#121418] and a mint green ([#00e5a0]) accent on the key phrase of the headline. The display type is large Inter with tight leading, mixing white with mint. Coloured glows and thin card borders give the page a technical stance.

**Mood:** technical, high-contrast, dark, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0b0d` | Page ground |
| Surface | `#121418` | Cards, panels, raised areas |
| Text | `#edeff2` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00e5a0` | Primary action and highlights |
| Second accent | `#ff6b6b` | Supporting highlights |

Palette by frequency of use: `#00e5a0` · `#ffffff` · `#edeff2` · `#6b7280` · `#9ba3af` · `#0a0b0d` · `#121418` · `#5b6270` · `#ff6b6b` · `#181b20`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 116px · h2 60px · h3 24px · body 18px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_6px_#00E5A0]`, `shadow-[0_0_4px_#00E5A0]`, `shadow-[0_0_8px_#00E5A0]`
- **Content width:** `max-w-[80rem]`, `max-w-[35rem]`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex h-10 px-5 bg-[#00E5A0] rounded-full text-[#0A0B0D] font-space font-normal text-sm tracking-tight hover:scale-[1.03] active:scale-95 transition-all relative overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Pricing (`pricing`)
6. Process / steps (`how-it-works`)
7. Product grid (`product-grid`)
8. Feature grid (`features`)
9. Testimonials (`testimonials`)
10. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0b0d;
  --color-surface: #121418;
  --color-text: #edeff2;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #00e5a0;
  --color-accent-2: #ff6b6b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0b0d',
    surface: '#121418',
    ink: '#edeff2',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#00e5a0',
    accent2: '#ff6b6b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use mint (#00e5a0) for the highlighted phrase in the headline and the primary button
- **Do:** Set the hero headline in Inter at very large size, with the last phrase in mint
- **Do:** Keep card surfaces at #121418 with light borders
- **Don't:** Don't use mint for body copy
- **Don't:** Don't add a second bright accent next to mint
- **Don't:** Don't place mint text on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
