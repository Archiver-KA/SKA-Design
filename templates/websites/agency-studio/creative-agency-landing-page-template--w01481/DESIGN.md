# Design system — Creative Agency Landing Page Template

`SN-W01481` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero (#000000) built around one gold display word, 'DIGITAL', set in heavy uppercase sans, with 'Crafting' and 'Legacies' in a light italic serif above and below it. Gold (#d4af37) is the only hue on screen. A dark video card on the right carries the work, and the call to action is an outlined button with a thin gold stroke.

**Mood:** luxurious, cinematic, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#aa8c2c` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#000000` · `#fcf6ba` · `#18181b` · `#eae0c5` · `#aa8c2c` · `#f3e3a8` · `#3b82f6` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]`, `shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-14`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 rounded-lg bg-[#d4af37] text-black font-semibold text-sm hover:bg-[#ebd278] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Pricing (`pricing`)
9. Bento grid (`bento-grid`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #aa8c2c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#aa8c2c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word in heavy uppercase gold (#d4af37) and pair it with light italic serif words.
- **Do:** Keep the first screen black (#000000) with gold as the only hue.
- **Do:** Use outlined buttons with a thin gold stroke for calls to action.
- **Don't:** Don't add blue to this page.
- **Don't:** Don't use a solid gold fill for large buttons or cards.
- **Don't:** Don't introduce a second display sans; the italic serif is the only contrast.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
