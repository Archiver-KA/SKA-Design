# Design system — mplate

`SN-W01643` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a very large centred headline, where the wordmark-style words fade from white to grey as a vertical gradient. A soft radial glow fills the background behind the type, and a small orange (#f97316) dot marks the navigation contact link. Depth comes from glow and gradient text rather than borders or cards.

**Mood:** cinematic, dark, oversized, atmospheric, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#1f2937` · `#030712` · `#111827` · `#374151` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 136px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_40px_rgba(249,115,22,0.4)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-3 px-10 py-4 bg-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large in Space Grotesk with a white-to-grey vertical gradient
- **Do:** Use the orange (#f97316) only for the navigation contact link and small status markers
- **Do:** Place a soft radial glow behind the hero type instead of a hard shape
- **Don't:** Don't set the headline in a flat solid colour; the gradient is part of the look
- **Don't:** Don't use the green (#22c55e) accent in the hero
- **Don't:** Don't use hard card borders; the page separates sections with glow and dark tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
