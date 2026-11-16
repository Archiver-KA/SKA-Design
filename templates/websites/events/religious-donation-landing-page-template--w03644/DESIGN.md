# Design system — Religious Donation Landing Page Template

`SN-W03644` · events · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark, elegant donation hero in which a dimmed photograph sits behind a centred serif headline in white. The second line is set in italic gold (#d4af37), which carries the emphasis, and a solid gold button below the copy is the primary action. Navigation is small and light on a dark glass bar, and a translucent counter card in the corner keeps gold to a few key points.

**Mood:** elegant, devotional, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#3f3f46` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#000000` · `#0a0a0a` · `#27272a` · `#a1a1aa` · `#18181b` · `#3f3f46` · `#d4d4d8` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Playfair Display, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1rem]` (1rem), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_25px_rgba(212,175,55,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-[#D4AF37] rounded-full group bg-[#D4AF37]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #3f3f46;
  --color-border: #27272a;
  --color-accent: #d4af37;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#3f3f46',
    line: '#27272a',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif, with the italic second line in gold (#d4af37)
- **Do:** Use the solid gold button for the single primary action in each section
- **Do:** Dim the photograph behind the headline with a dark overlay
- **Don't:** Don't use light page backgrounds in the hero
- **Don't:** Don't set body text in gold
- **Don't:** Don't add colours beyond gold and white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
