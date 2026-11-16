# Design system — Enterprise Remote Call Center

`SN-W00370` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black enterprise page with centred, large white Inter headlines and one phrase in lavender (#818cf8). Everything sits in a central column: a floating translucent nav pill, the headline, two lines of muted grey copy and one dark grey button. The page is restrained and the lavender phrase is its only colour, so it reads as calm and technical.

**Mood:** dark, calm, technical, centred, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#6366f1` · `#18181b` · `#e4e4e7` · `#71717a` · `#818cf8` · `#f4f4f5` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-3xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Booking form (`booking`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline and limit colour to one lavender phrase (#818cf8).
- **Do:** Put the navigation in a floating, translucent pill above the hero.
- **Do:** Set supporting copy in grey (#a1a1aa) directly under the headline.
- **Don't:** Don't use the lavender on buttons; the secondary button is dark grey.
- **Don't:** Don't add a second accent hue to the hero.
- **Don't:** Don't left-align the hero text; the layout is centred.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
