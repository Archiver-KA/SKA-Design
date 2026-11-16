# Design system — Konvix Agency Landing Page Template

`SN-W01613` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A black, glassy studio page for a digital-product agency. The headline is large Inter in white, with its second clause fading to grey. The nav CTA sits in a deep indigo (#312e81) glass pill, and indigo (#6366f1) is the one brand colour, kept to small highlights and status dots. The primary button is white, so the action stays neutral, and soft rounded panels make the page polished rather than bold.

**Mood:** polished, dark, neutral, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#818cf8` · `#000000` · `#4f46e5` · `#a855f7` · `#312e81` · `#a5b4fc` · `#3b82f6` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.05)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl border border-indigo-500 px-8 py-4 text-sm font-semibold hover:bg-indigo-500 transition font-geist shadow-[0_0_30px_rgba(79,70,229,0.3)] w-full sm:w-auto justify-center bg-indigo-600 text-white">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
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
    surface: '#171717',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter, white, with the second clause in a grey gradient
- **Do:** Use the white primary button and keep indigo (#6366f1) for status dots and small highlights
- **Do:** Give nav pills a glass look with a deep indigo (#312e81) tint
- **Don't:** Don't use indigo as a large button fill; the primary action is white
- **Don't:** Don't add more than one gradient clause per headline
- **Don't:** Don't set section headings in indigo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
