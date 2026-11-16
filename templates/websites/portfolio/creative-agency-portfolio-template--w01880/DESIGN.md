# Design system — Creative Agency Portfolio Template

`SN-W01880` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic hero on a near-black ground, with a slightly lighter tilted panel holding the content. Headlines are large Inter in white, and the last word of the main line is set in a grey italic that fades in tone, which is the page's one expressive move. Small, widely tracked grey caps carry the navigation and status text, so the type does most of the work.

**Mood:** cinematic, moody, restrained, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#27272a` · `#71717a` · `#18181b` · `#52525b` · `#a1a1aa` · `#3f3f46` · `#000000` · `#d4d4d8` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full bg-white text-black hover:bg-zinc-200 transition-colors font-medium text-sm py-3 rounded-lg flex justify-center items-center gap-2 mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Case studies (`case-studies`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
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
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines in Inter, white on near-black, with one grey italic word per headline.
- **Do:** Put navigation and labels in small, widely tracked uppercase grey text.
- **Do:** Build the content panel as a slightly lighter surface (#18181b) on the black ground.
- **Don't:** Don't add bright accent colours; the page uses grey and white only.
- **Don't:** Don't set headlines in a serif face; only the italic word changes style.
- **Don't:** Don't place the hero on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
