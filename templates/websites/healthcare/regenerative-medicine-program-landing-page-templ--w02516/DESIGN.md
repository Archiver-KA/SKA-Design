# Design system — Regenerative Medicine Program Landing Page Template

`SN-W02516` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, near-black hero with a three-line white sans headline in which the middle line drops to grey, a device used to set the claim against the qualifier. Gold (#c9a668) fills the primary button and is the only accent, while the outlined secondary button stays quiet. On the right, a dark panel with a monospace texture and one testimonial card frames the proof.

**Mood:** dark, serious, clinical, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a668` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#c9a668` · `#e7e5e4` · `#57534e` · `#78716c` · `#44403c` · `#a8a29e` · `#292524` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#C9A668] hover:bg-[#B89557] px-8 py-3.5 rounded-md text-base font-medium transition-all shadow-lg flex items-center justify-center gap-2 text-white shadow-orange-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Integrations (`integrations`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #57534e;
  --color-border: #ffffff;
  --color-accent: #c9a668;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#57534e',
    line: '#ffffff',
    accent: '#c9a668',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white sans, with the middle line in grey to mark the contrast
- **Do:** Use gold (#c9a668) for the primary button only
- **Do:** Place one testimonial card over a dark monospace panel as the proof element
- **Don't:** Don't set text in gold over the dark panel; use white
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use the light palette (#f0f2ef) as the hero ground; the page is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
