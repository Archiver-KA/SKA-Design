# Design system — Awards Commission Landing Page Template

`SN-W03569` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The Awards Commission hero is a dark, photo-led stage with a large white serif headline. The word Leadership is set in gold italic, and the same gold fills the primary button and the navigation call to action. A dark photograph of a formal hall sits behind the copy, and secondary buttons are dark outlines. The tone is ceremonial and dignified.

**Mood:** ceremonial, formal, dark, gold, dignified

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |

Palette by frequency of use: `#c9a84c` · `#ffffff` · `#0a0a0a` · `#0d0d0d` · `#050505` · `#e8d48b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-[0.3em]`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(201,168,76,0.15)]`, `shadow-[0_0_15px_rgba(201,168,76,0.2)]`, `shadow-[0_0_30px_rgba(201,168,76,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 rounded-sm text-xs tracking-[0.2em] uppercase font-medium border transition-all duration-300 hover:bg-white/5 w-full sm:w-auto justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Team (`team`)
6. Awards / press (`awards-press`)
7. Feature grid (`features`)
8. Stats band (`stats`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c9a84c;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c9a84c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in gold italic serif
- **Do:** Use gold for primary buttons and the navigation call to action
- **Do:** Place event photography under a dark overlay
- **Don't:** Don't use gold as a full background
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't add colours beyond the gold and the neutrals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
