# Design system — Virtual Tour Agency Landing Page Template

`SN-W03156` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, charcoal hero: a darkened interior photograph sits behind a centred glass panel with a large white bold sans headline, whose last line fades to grey. No indigo appears in the first screen; the calls to action are a white primary button and a dark outlined secondary. Depth comes from the translucent panel and the photograph, not from colour.

**Mood:** dark, glassy, modern, sober, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#09090b` · `#71717a` · `#818cf8` · `#18181b` · `#a1a1aa` · `#ef4444` · `#eab308` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_30px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Logo cloud (`logo-cloud`)
7. Newsletter signup (`newsletter`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white bold sans, with the last line in a grey fade
- **Do:** Use a solid white button for the primary call to action and a dark outlined one beside it
- **Do:** Keep the hero content inside a translucent dark panel over the photograph
- **Don't:** Don't use the indigo (#6366f1) for buttons; it does not appear in the first screen
- **Don't:** Don't put light panels on the charcoal ground
- **Don't:** Don't add a second coloured accent to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
