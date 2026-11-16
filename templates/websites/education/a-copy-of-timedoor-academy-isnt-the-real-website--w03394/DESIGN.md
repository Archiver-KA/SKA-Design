# Design system — a copy of timedoor academy (ISNT THE REAL WEBSITE)

`SN-W03394` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark hero for a coding school on a near-black ground with a soft green glow centred behind the headline. The headline is large white sans with one word set in mint green, and the primary button is a solid mint pill beside an outlined secondary. A thin announcement bar sits at the top, so the page reads as friendly and upbeat without losing contrast.

**Mood:** upbeat, friendly, high-contrast, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#a3a3a3` · `#10b981` · `#737373` · `#171717` · `#000000` · `#262626` · `#0a0a0a` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(16,185,129,0.2)]`, `shadow-lg`, `shadow-[0_0_10px_rgba(16,185,129,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-[1000px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-emerald-400 hover:text-black transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Video / media (`video-media`)
6. Code / terminal (`code-terminal`)
7. FAQ (`faq`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in white (#ffffff) with one word in mint (#34d399).
- **Do:** Use the solid mint pill (#10b981) for the primary button and an outlined pill for the secondary.
- **Do:** Keep the green glow centred behind the headline rather than across the whole page.
- **Don't:** Don't set body copy in mint; it is for the highlighted word and the buttons only.
- **Don't:** Don't use a light background; the page ground is black.
- **Don't:** Don't add a second glow colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
