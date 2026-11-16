# Design system — Creator Link in Bio Page Template

`SN-W01921` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a soft brown-orange glow at the top, where a round avatar in deep rust sits above the name in white. Link cards are outlined in rust-brown over a dark tinted fill, and their subtitles are orange, which makes orange the main accent. The layout is one centred column of stacked buttons in Inter, with no imagery beyond the avatar.

**Mood:** warm, minimal, dark, personal, stacked

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Border | `#050505` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#9a3412` · `#7c2d12` · `#fed7aa` · `#c2410c` · `#fb923c` · `#ea580c` · `#f97316` · `#ffedd5` · `#fdba74` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 20px · h3 12px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-4 py-1.5 my-1 mr-1 bg-orange-100 hover:bg-orange-300 text-black text-xs font-semibold rounded shadow transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Newsletter signup (`newsletter`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #27272a;
  --color-text: #a1a1aa;
  --color-border: #050505;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#27272a',
    ink: '#a1a1aa',
    line: '#050505',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep links in one centred column of equal-width cards
- **Do:** Use rust-brown outlines (#7c2d12) and orange subtitles (#ea580c) on link cards
- **Do:** Set the name in white Inter above a short orange tagline
- **Don't:** Don't add a second column of links; the stack is the layout
- **Don't:** Don't use bright blue or green; the palette is warm only
- **Don't:** Don't add large hero imagery; the avatar is the only picture

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
