# Design system — Underwater Camera Landing Page Template

`SN-W02268` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A product hero for an underwater camera: a full-bleed swimmer photograph under a blue gradient wash, with the headline in bold black sans that fades into a bright blue (#2563eb) last word. Blue pill buttons sit under a small grey subtitle, and a black nav bar runs across the top. The blue gradient over the photo and the bright blue final headline word are what make the page recognisable, and blue is the only accent.

**Mood:** energetic, clean, sporty, bright, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3b82f6` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#000000` · `#2563eb` · `#ffffff` · `#475569` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#334155` · `#007cc3` · `#1b6283`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset]`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-[1px]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:block px-4 py-1.5 rounded-full text-xs font-semibold transition-colors bg-black text-white hover:bg-slate-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #3b82f6;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #475569;
  --color-border: #000000;
  --color-accent: #2563eb;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3b82f6',
    surface: '#000000',
    ink: '#111111',
    muted: '#475569',
    line: '#000000',
    accent: '#2563eb',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the last headline word in the blue accent (#2563eb) and the rest in black sans.
- **Do:** Keep the photograph under a blue gradient so the black headline stays legible.
- **Do:** Use blue pill buttons for both actions, with a light outline for the secondary.
- **Don't:** Don't use the yellow (#eab308) for text; it is for a small highlight only.
- **Don't:** Don't set the headline in white over the photograph; the wash is light.
- **Don't:** Don't use a dark gradient on the hero; the page is light and blue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
