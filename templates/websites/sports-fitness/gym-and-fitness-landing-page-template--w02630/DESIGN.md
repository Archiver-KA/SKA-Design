# Design system — Gym & Fitness Landing Page Template

`SN-W02630` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, lime-accented gym hero. Heavy uppercase Inter sets a white first line over a lime second line with a soft glow, beside a solid lime button and a dark outline button. Four stat tiles on dark navy cards sit below, with lime figures. Lime carries the headline, buttons and numbers, so the page reads as neon on dark.

**Mood:** neon, dark, uppercase, energetic, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#94a3b8` · `#020617` · `#1e293b` · `#cbd5e1` · `#0f172a` · `#000000` · `#334155` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 48px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_15px_rgba(163,230,53,0.4)]`, `shadow-[0_0_20px_rgba(163,230,53,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-lime-400 text-slate-950 hover:bg-lime-300 px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(163,230,53,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. About (`about`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Stats band (`stats`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #334155;
  --color-accent: #a3e635;
  --color-accent-2: #1e293b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    ink: '#ffffff',
    muted: '#334155',
    line: '#334155',
    accent: '#a3e635',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase, with the second line in lime (#a3e635) and a soft glow.
- **Do:** Use lime (#a3e635) for the primary button and the stat figures.
- **Do:** Keep stat tiles on the dark navy cards, with the lime figures centred.
- **Don't:** Don't use the lime (#a3e635) as the page ground.
- **Don't:** Don't add a glow to body copy.
- **Don't:** Don't use the dark outline button in place of the lime primary.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
