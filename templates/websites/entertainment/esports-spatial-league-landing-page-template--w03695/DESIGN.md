# Design system — Esports Spatial League Landing Page Template

`SN-W03695` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black stage with a heavy grotesk headline set in solid white, the first line filled and the second line repeated as an outline. Small wide-tracked labels and status text carry a single cool cyan (#00f0ff), so the colour reads as signal rather than decoration. Pill-shaped tabs and buttons contrast with the rectangular hero type, which gives the page an austere, broadcast tone.

**Mood:** cinematic, futuristic, high contrast, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00f0ff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#4b5563` · `#9ca3af` · `#d1d5db` · `#00f0ff` · `#000000` · `#030303` · `#ef4444` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h2 72px · h3 24px · body 16px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#00F0FF]`
- **Content width:** `max-w-[90vw]`, `max-w-[1600px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Video / media (`video-media`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #00f0ff;
  --color-accent-2: #ef4444;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#00f0ff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in uppercase grotesk, with the second line outlined rather than filled
- **Do:** Keep the cyan (#00f0ff) to small labels and status text
- **Do:** Put navigation and tab controls in full-round pills
- **Don't:** Don't use a light background for the hero section
- **Don't:** Don't fill the outlined headline line
- **Don't:** Don't use more than one bright accent colour in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
