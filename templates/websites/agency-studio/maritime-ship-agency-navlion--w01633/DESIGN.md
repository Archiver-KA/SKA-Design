# Design system — Maritime Ship Agency Navlion

`SN-W01633` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark maritime page on near-black navy (#02040a). A large light sans headline runs in two lines, and the phrase 'port of' takes a cyan (#22d3ee) tint while the rest stays white and grey. The primary button is a deep blue fill with white text beside an outline secondary, and a small rounded badge sits above the headline. The scroll cue at the bottom finishes the hero.

**Mood:** maritime, dark, precise, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02040a` | Page ground |
| Surface | `#02040a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00284b` · `#22d3ee` · `#06b6d4` · `#d4d4d8` · `#02040a` · `#a1a1aa` · `#000000` · `#71717a` · `#0891b2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 20px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black/50`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#00284B] text-white border border-white/10 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 text-xs font-bold tracking-wide uppercase group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #02040a;
  --color-surface: #02040a;
  --color-text: #ffffff;
  --color-muted: #d4d4d8;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #c084fc;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#02040a',
    surface: '#02040a',
    ink: '#ffffff',
    muted: '#d4d4d8',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope, white, with one phrase tinted cyan (#22d3ee)
- **Do:** Use a deep blue filled button for the primary action and an outline for the secondary
- **Do:** Keep the page on near-black navy (#02040a)
- **Don't:** Don't use cyan for body text
- **Don't:** Don't add a second bright accent over the hero
- **Don't:** Don't set the headline in all caps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
