# Design system — Army Physical Training Landing Page Template

`SN-W03412` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark, high-impact training page on near-black with a soft green glow behind the centre. A heavy uppercase headline stacks in two lines, with the second line in an emerald gradient (#10b981) that fades toward grey. Buttons are a white pill, a dark button and an outlined button, so the white one is clearly the primary action, and small grey tags list the details.

**Mood:** intense, disciplined, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ecfdf5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#a1a1aa` · `#27272a` · `#34d399` · `#18181b` · `#71717a` · `#3f3f46` · `#064e3b` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-emerald-900/50`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 rounded hover:bg-emerald-900/50 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Schedule (`schedule-agenda`)
6. Sign-in form (`auth-form`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ecfdf5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ecfdf5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase white, with the second line in the emerald gradient (#10b981).
- **Do:** Use the white pill for the primary action and keep the dark and outlined buttons secondary.
- **Do:** Keep the green glow behind the headline only, on a near-black ground.
- **Don't:** Don't set body copy or tags in emerald.
- **Don't:** Don't use a light background for the hero.
- **Don't:** Don't add a second glow colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
