# Design system — Portfolio Website with Animated UI

`SN-W02177` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Atmospheric dark page: a black ground (#000000) with large soft blurred blobs in green, yellow and blue behind a centred headline. The headline is a serif set large in white, with a lighter grey subline beneath it. Colour lives only in the blurred background, while the text stays plain and centred.

**Mood:** atmospheric, soft, dark, dreamy, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#4b5563` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#4ade80` · `#d1d5db` · `#f8fafc` · `#facc15` · `#6b7280` · `#22c55e` · `#374151` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 20px · body 14px
- **Weights in use:** medium, normal

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-xl` (12px)
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full glass-border px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 animate-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #374151;
  --color-text: #f3f4f6;
  --color-muted: #6b7280;
  --color-border: #4b5563;
  --color-accent: #4ade80;
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
    surface: '#374151',
    ink: '#f3f4f6',
    muted: '#6b7280',
    line: '#4b5563',
    accent: '#4ade80',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero headline centred and large, white on black
- **Do:** Put colour only in the blurred background blobs (#4ade80 family)
- **Do:** Use a lighter grey subline beneath the headline
- **Don't:** Don't use sharp colour blocks; the blobs stay soft
- **Don't:** Don't place small body text over the blobs
- **Don't:** Don't add a light section; the page stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
