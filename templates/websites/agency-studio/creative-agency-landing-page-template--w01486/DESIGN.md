# Design system — Creative Agency Landing Page Template

`SN-W01486` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero (#000000) with centred, bold sans headlines in white, where the third line is set in a green serif (#34d399) as the single accent. Two short lines of white body copy sit below, and a large yellow pill button (#facc15) with dark uppercase text is the only solid shape on the page. A soft yellow glow around the button adds emphasis in a symmetrical, centred composition.

**Mood:** bold, centred, playful, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fbbf24` · `#10b981` · `#facc15` · `#34d399` · `#0ea5e9` · `#a7f3d0` · `#71717a` · `#38bdf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 36px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)]`, `shadow-[0_0_60px_-15px_rgba(250,204,21,0.7)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-8`, `gap-x-8`, `gap-y-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Footer (`footer`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #000000;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#000000',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline bold and centred in white, and colour the final line in green (#34d399) using a serif.
- **Do:** Use the yellow (#facc15) only for the primary button, with dark uppercase text.
- **Do:** Keep body copy to two short lines beneath the headline.
- **Don't:** Don't use the yellow as a page background; the page is black.
- **Don't:** Don't use a serif for body copy; the serif is reserved for the green highlight line.
- **Don't:** Don't add a second button colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
