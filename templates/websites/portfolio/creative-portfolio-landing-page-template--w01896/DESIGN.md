# Design system — Creative Portfolio Landing Page Template

`SN-W01896` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large heading in a grey gradient and one white word, 'it', which points to the key idea. The primary action is a teal (#0a8da3) pill with a soft glow, and the secondary is a dim outline pill, so one colour carries the decision. Body copy is grey and centred, and the teal glow reads only against the black ground.

**Mood:** moody, quiet, focused, generative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0a8da3` | Primary action and highlights |
| Second accent | `#0a8da3` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#dc2626` · `#000000` · `#9ca3af` · `#0a8da3` · `#27272a` · `#d4d4d8` · `#18181b` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-x-3`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #0a8da3;
  --color-accent-2: #0a8da3;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#0a8da3',
    accent2: '#0a8da3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#0a8da3) only on the primary pill and its glow.
- **Do:** Set the headline in a large sans with a grey gradient and one white word.
- **Do:** Keep the secondary button as a dim outline pill.
- **Don't:** Don't put the teal on body copy.
- **Don't:** Don't use a light background; the glow reads only on black.
- **Don't:** Don't set the headline at a small size; the display scale carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
