# Design system — Digital Studio Portfolio Landing Page Template

`SN-W01990` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Stark, oversized uppercase: a black ground with a huge white grotesque headline set in three staggered lines, DIGITAL, EXPERIENCE indented to the right, and ENGINEERS. A green status dot and a floating green circle are the only colour, placed at the edge of the screen. Body copy is small and grey at the lower left, so the layout depends on scale and offset.

**Mood:** stark, oversized, monochrome, poster, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#22c55e` · `#3b82f6` · `#4ade80` · `#f3f4f6` · `#333333` · `#444444` · `#2563eb` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 36px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 uppercase text-xs font-medium tracking-widest border border-black/20 dark:border-white/20 px-4 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Case studies (`case-studies`)
3. Navigation bar (`navbar`)
4. Services (`services`)
5. Hero (`hero`)
6. Marquee (`marquee`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #444444;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #facc15;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#444444',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large uppercase white sans, indenting the middle line
- **Do:** Use the green (#22c55e) for the status dot and the floating action circle only
- **Do:** Keep body copy small and grey at the lower left, aligned with the status block
- **Don't:** Don't reduce the headline to one line; the three-line stagger is the layout
- **Don't:** Don't add a second accent colour beside the green
- **Don't:** Don't put body copy at headline scale; the contrast in size is the point

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
