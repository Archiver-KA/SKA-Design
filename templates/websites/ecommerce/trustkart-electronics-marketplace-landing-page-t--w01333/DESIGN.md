# Design system — TrustKart Electronics Marketplace Landing Page Template

`SN-W01333` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, quiet marketplace hero on near-black (#050505), with a faint grid and a floating translucent navigation pill. The headline splits into a grey first line and a white second line, which gives the claim weight without colour. The primary action is an emerald (#10b981) pill beside an outlined grey pill, so the single green marks the path to buy.

**Mood:** dark, trustworthy, precise, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#000000` · `#050505` · `#404040` · `#262626` · `#161616` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]`, `shadow-[0_0_15px_rgba(16,185,129,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative h-12 px-8 rounded-full bg-trust-500 text-black text-sm font-bold tracking-tight hover:bg-trust-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#050505) with a faint grid and white headline type
- **Do:** Use emerald (#10b981) for the primary button and status accents only
- **Do:** Set the headline as a grey first line over a white second line, in large sans-serif
- **Don't:** Don't add warm or bright colours; the page is black, white and emerald
- **Don't:** Don't use emerald for large text or fills; it is for actions and status
- **Don't:** Don't place light panels behind the hero; the dark ground carries through the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
