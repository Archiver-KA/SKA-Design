# Design system — Dark Personal Profile Landing Page Template

`SN-W01933` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark profile page with a centred avatar, a white name and a muted grey bio, followed by a grid of two rounded tiles. The featured tile uses a violet gradient image, and the second tile is a small info panel with a green status dot. Inter throughout, with hairline-bordered tiles, gives the page a compact, app-like feel.

**Mood:** compact, dark, personal, app-like, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090a` | Page ground |
| Surface | `#111214` | Cards, panels, raised areas |
| Text | `#e1e7ef` | Headings and primary copy |
| Muted text | `#7f8590` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2125` · `#7f8590` · `#111214` · `#161719` · `#08090a` · `#000000` · `#10b981` · `#1e1e1e` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 20px · h3 14px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[420px]`, `max-w-[280px]`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Announcement bar (`announcement-bar`)
3. Navigation bar (`navbar`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #08090a;
  --color-surface: #111214;
  --color-text: #e1e7ef;
  --color-muted: #7f8590;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090a',
    surface: '#111214',
    ink: '#e1e7ef',
    muted: '#7f8590',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the profile block centred above a grid of rounded tiles
- **Do:** Use green (#10b981) only for status dots and small labels
- **Do:** Use the violet gradient (#a855f7) as the featured tile's image
- **Don't:** Don't add a navigation bar; the page is one centred column
- **Don't:** Don't put green on large surfaces
- **Don't:** Don't use a light background for the profile page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
