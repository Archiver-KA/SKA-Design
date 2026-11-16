# Design system — Marketing Team Landing Page UI

`SN-W01638` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark teal-to-black gradient hero with a centred white headline and one highlighted phrase in warm yellow (#fbbf24). Floating glass cards with glow and stat numbers sit to the right, giving the hero a product-dashboard feel. The mood is energetic and polished, with the yellow highlight doing most of the emphasis work.

**Mood:** energetic, glassy, polished, gradient-led, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#67e8f9` · `#3b82f6` · `#34d399` · `#2563eb` · `#fb923c` · `#fbbf24` · `#d97706` · `#055248`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · body 18px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="relative inline-flex gap-2 sm:px-6 sm:py-2.5 sm:text-sm hover:from-amber-500 transition-all duration-200 hover:shadow-xl hover:to-blue-500 text-xs font-medium text-white bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-emerald-400 via-lime-700 via-green-600 via-teal-600 via-cyan-500 to-emerald-400 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg items-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #fbbf24;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Highlight one phrase per headline in #fbbf24 and leave the rest white
- **Do:** Use frosted glass cards with soft glow for floating stat tiles
- **Do:** Keep stat numbers large and short, with small labels beneath them
- **Don't:** Don't read the page background as white; it is a dark green gradient, so text must be light on it
- **Don't:** Don't use the blue (#60a5fa) as the headline highlight; it is secondary
- **Don't:** Don't add more than one highlight colour per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
