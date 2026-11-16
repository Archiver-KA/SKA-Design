# Design system — Cybersecurity SaaS Landing Page Template

`SN-W00320` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark SaaS hero on near-black [#030304], with a heavy white headline in two lines where the second line is set in a lighter grey. The buttons are a white solid and a dark outline, and the dashboard panel below uses small grey labels and white figures. The page relies on white type against black, with any glow kept faint in the background.

**Mood:** dark, stark, restrained, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#030304` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#34d399` · `#10b981` · `#a855f7` · `#030304` · `#0a0a0a` · `#000000` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_rgba(239,68,68,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Integrations (`integrations`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #030304;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    surface: '#030304',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter, heavy and white, with the second line in grey
- **Do:** Use a white solid button and a dark outlined button side by side
- **Do:** Keep the dashboard panel dark, with white figures and small grey labels
- **Don't:** Don't use the indigo (#6366f1) as the page ground
- **Don't:** Don't put a bright gradient on the headline
- **Don't:** Don't add a light section to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
