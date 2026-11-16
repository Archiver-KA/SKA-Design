# Design system — Lucas Tell - Marketing Consciente Coach 

`SN-W01627` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A black personal-coaching page with a bold sans headline in white. The closing phrase, 'crecer con sentido', is set in muted gold (#d4af37), which is used sparingly on the eyebrow pill and that phrase, giving a premium, understated tone without ornament. The hero is split, with copy on the left and a tall portrait frame on the right.

**Mood:** premium, calm, personal, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#000000` · `#ef4444` · `#0a0a0a` · `#f87171` · `#262626` · `#171717` · `#e5e7eb` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-inner`, `shadow-sm`, `shadow-[0_0_10px_#D4AF37]`
- **Content width:** `max-w-6xl`, `max-w-screen-xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="w-full py-3.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-center transition-all text-sm z-20 relative">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #e5e7eb;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #ef4444;
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
    surface: '#0a0a0a',
    ink: '#e5e7eb',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans, white, with the key phrase in gold (#d4af37)
- **Do:** Use gold only on the eyebrow pill and one highlight phrase
- **Do:** Keep the page on black (#000000) with a tall portrait frame on the right
- **Don't:** Don't set paragraphs in gold
- **Don't:** Don't use a red (#ef4444) accent in the hero
- **Don't:** Don't add ornaments or patterns; the look is flat black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
