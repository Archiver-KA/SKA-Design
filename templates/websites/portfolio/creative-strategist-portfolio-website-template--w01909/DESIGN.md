# Design system — Creative Strategist Portfolio Website Template

`SN-W01909` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large, tight sans headline in white, where the final line fades to a grey gradient. The subtitle is short and grey, and the primary action is a solid white pill beside an outline pill. Colour is absent from the first screen, so the page reads as confident and monochrome.

**Mood:** confident, monochrome, clean, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#6366f1` · `#818cf8` · `#030303` · `#111111` · `#e5e5e5` · `#525252` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-tight hover:bg-neutral-200 transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Dashboard preview (`dashboard-preview`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #030303;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "a monospace face", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#030303',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['a monospace face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a tight, large sans in white, with the last line in grey gradient.
- **Do:** Keep primary buttons as solid white pills.
- **Do:** Keep the page on near-black (#030303) with white and grey only.
- **Don't:** Don't add the indigo (#6366f1) to the page.
- **Don't:** Don't set the headline in monospace; keep it sans.
- **Don't:** Don't use outline buttons for the primary action.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
