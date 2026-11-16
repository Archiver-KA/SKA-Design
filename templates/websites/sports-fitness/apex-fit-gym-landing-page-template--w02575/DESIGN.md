# Design system — APEX.FIT Gym Landing Page Template

`SN-W02575` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, premium gym page on a near-black ground, with a large white bold sans-serif headline and a lime-green second line that carries the accent. The lime (#a3e635) also fills the primary button, and the stat tiles sit on slightly raised dark panels. The layout is centred and cinematic, with a faint glow behind the hero.

**Mood:** dark, premium, energetic, cinematic, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#71717a` · `#a1a1aa` · `#18181b` · `#09090b` · `#84cc16` · `#27272a` · `#3f3f46` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 30px · body 10px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_-10px_rgba(163,230,53,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-lime-400 text-zinc-950 text-xs font-semibold rounded-full hover:bg-lime-300 transition-all flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. About (`about`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the lime (#a3e635) and keep the first line white
- **Do:** Use the lime only for the primary button, the highlighted headline phrase and small status markers
- **Do:** Keep the stat tiles on a slightly raised dark panel with thin borders
- **Don't:** Don't use the lime as a page background; the ground is near-black.
- **Don't:** Don't set body text in lime; it is reserved for emphasis
- **Don't:** Don't remove the faint glow behind the hero; it provides depth.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
