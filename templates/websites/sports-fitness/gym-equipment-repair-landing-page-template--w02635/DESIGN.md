# Design system — Gym Equipment Repair Landing Page Template

`SN-W02635` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark charcoal service hero for an equipment repair business. The title, Expert Repair for Professional Gyms., sits in white sans-serif on two centred lines over a grey supporting paragraph, with a white filled button beside an outline button. A faint green status tag sits above the title, and a dimmed photograph of equipment begins in a rounded frame below. Green stays on the tag alone.

**Mood:** clear, service-led, charcoal, calm, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#27272a` · `#000000` · `#09090b` · `#d4d4d8` · `#18181b` · `#3f3f46` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-medium px-4 py-2 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #000000;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#000000',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans-serif on two centred lines.
- **Do:** Use the green (#22c55e) only for the small status tag.
- **Do:** Keep the photograph in a rounded frame below the hero.
- **Don't:** Don't use green for the buttons; they stay white and outlined.
- **Don't:** Don't set the supporting paragraph in white; it stays grey.
- **Don't:** Don't add a coloured background to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
