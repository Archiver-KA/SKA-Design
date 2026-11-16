# Design system — AI Accountant Landing Page Template

`SN-W00025` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A high-urgency VSL page built on a near-black ground with red light bleeding in from the edges. Headlines use uppercase Inter at about 48px, with keywords picked out in red (#ef4444), yellow (#facc15) and cyan so the eye jumps between the promise and the time frame. A large dark video frame with a red play marker sits under the headline, and the red call to action closes the first screen.

**Mood:** urgent, bold, high-contrast, saturated, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#fecaca` · `#000000` · `#7f1d1d` · `#f87171` · `#dc2626` · `#facc15` · `#b91c1c` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 24px · body 14px
- **Weights in use:** bold, light, black
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_50px_rgba(69,10,10,0.5)]`, `shadow-[0_0_30px_rgba(220,38,38,0.5)]`, `shadow-sm`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-10 bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white rounded-full font-black text-xl md:text-2xl uppercase tracking-wide shadow-[0_0_40px_rgba(220,38,38,0.6)] py-3 font-['Oswald'] transition-transform hover:scale-105 flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Footer (`footer`)
3. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #e5e5e5;
  --color-muted: #d4d4d4;
  --color-accent: #ef4444;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#e5e5e5',
    muted: '#d4d4d4',
    accent: '#ef4444',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase Inter at about 48px with keywords in colour
- **Do:** Keep the video frame large and centred under the headline with a red play marker
- **Do:** Use the red (#ef4444) for the primary call to action
- **Don't:** Don't use a light background; the ground is black
- **Don't:** Don't use more than three highlight colours in one headline
- **Don't:** Don't add soft pastel tints; the look is saturated red, yellow and white on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
