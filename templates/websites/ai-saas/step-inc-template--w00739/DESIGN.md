# Design system — Step Inc Template

`SN-W00739` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, editorial hero on pure black (#000000) where the headline is set in Newsreader serif, the first line in italic and the rest in lighter grey. Colour is almost absent: the purple (#6b55e8) appears only in the small offer pill and thin rules, so the type carries the design. The contrast between the italic serif headline and the small uppercase eyebrow label is what makes it recognisable.

**Mood:** editorial, dark, quiet, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6b55e8` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#7c66ff` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#000000` · `#6b55e8` · `#e5e7eb` · `#dcd6ff` · `#9d8cff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 78px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_0_1px_rgba(124,102,255,0.5),0_2px_0_#5a45d0]`, `shadow-[0_0_0_1px_rgba(124,102,255,0.5),0_4px_0_#5a45d0,0_10px_15px_-3px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full py-4 rounded-lg bg-[#7c66ff] text-white font-bold text-center text-lg hover:bg-[#6b55e8] transition-all shadow-[0_0_20px_rgba(124,102,255,0.3)] hover:shadow-[0_0_30px_rgba(124,102,255,0.5)] mt-auto hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6b55e8;
  --color-accent-2: #f87171;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6b55e8',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Newsreader, first line italic and later lines in a lighter grey
- **Do:** Use the purple (#6b55e8) only for the offer pill and one accent per screen
- **Do:** Keep the eyebrow label small and uppercase above the headline
- **Don't:** Don't use a bright fill behind the headline; the page stays black
- **Don't:** Don't set the headline in a sans-serif face
- **Don't:** Don't stack more than one coloured pill in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
