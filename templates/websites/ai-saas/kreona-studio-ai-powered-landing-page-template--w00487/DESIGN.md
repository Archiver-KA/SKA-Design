# Design system — Kreona Studio AI-Powered Landing Page Template

`SN-W00487` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black product page where the type does the work: large, light grey Inter headlines with a gradient fade on the last word, set on a #030303 ground. Cyan (#06b6d4) appears only in the primary call-to-action and the nav button, with corner-bracket outlines framing the main button. Glowing backdrop blurs and a faint grid suggest a technical, generative tool rather than a consumer app.

**Mood:** technical, dark, precise, glowing, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#172554` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#a1a1aa` · `#71717a` · `#22d3ee` · `#09090b` · `#27272a` · `#52525b` · `#d4d4d8` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Plus Jakarta Sans, Manrope, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)]`, `shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-[70%]`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black px-8 py-4 rounded-none text-sm hover:bg-cyan-50 transition-all shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] active:translate-y-0.5 font-semibold font-sans tracking-wide [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #09090b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #172554;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#09090b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#172554',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline gradient to the last line only.
- **Do:** Use the cyan (#06b6d4) on the primary button and one nav action.
- **Do:** Frame the main call to action with thin corner brackets.
- **Don't:** Don't use cyan for body text or icons across the page.
- **Don't:** Don't add light backgrounds to panels; the ground stays #030303 to #09090b.
- **Don't:** Don't use rounded corners on the framed call to action.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
