# Design system — Liminal Resonance Biometrics App Template

`SN-W00495` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A phone-sized biometric app on a near-black violet ground (#0a0a0f) with cream (#ede7d2) serif type and violet (#7b5cff) data rings and trend lines. Cinzel sets the headings and the small caps labels, and dark rounded cards hold the readings, so the app feels like a private journal rather than a health tracker. The violet and cream are the only colours; the bottom tab bar is kept low in contrast.

**Mood:** private, atmospheric, quiet, serif, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#12121a` | Cards, panels, raised areas |
| Text | `#ede7d2` | Headings and primary copy |
| Accent | `#7b5cff` | Primary action and highlights |
| Second accent | `#b8a4ff` | Supporting highlights |

Palette by frequency of use: `#ede7d2` · `#b8a4ff` · `#12121a` · `#0a0a0f` · `#d4c9a6` · `#7b5cff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 18px · h2 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Common gaps:** `gap-4`, `gap-1`, `gap-1.5`

**Primary button**

```html
<a class="pill-btn mt-6 w-full rounded-full border border-[#B8A4FF]/30 bg-[#7B5CFF]/15 px-8 py-3 text-sm font-medium tracking-wide text-[#EDE7D2]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)
3. Navigation bar (`navbar`)
4. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #12121a;
  --color-text: #ede7d2;
  --color-accent: #7b5cff;
  --color-accent-2: #b8a4ff;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#12121a',
    ink: '#ede7d2',
    accent: '#7b5cff',
    accent2: '#b8a4ff',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set headings and small caps labels in Cinzel.
- **Do:** Plot readings in violet (#7b5cff) on dark cards.
- **Do:** Keep the bottom tab bar low in contrast so the content leads.
- **Don't:** Don't use cream for large filled areas; it is for type.
- **Don't:** Don't add a second data colour to the chart.
- **Don't:** Don't put Cinzel on long paragraphs; use it for titles only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
