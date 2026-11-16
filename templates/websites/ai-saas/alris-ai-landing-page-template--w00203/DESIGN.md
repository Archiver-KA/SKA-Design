# Design system — ALRIS AI Landing Page Template

`SN-W00203` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy hero on a near-white ground with a soft violet glow at the top. The headline is set large in a regular-weight sans, and its second line drops to a lighter grey, so weight and tone do the work instead of colour. The violet (#8624ff) appears only on the primary button and the status pill, which makes the call to action the one saturated point on the screen.

**Mood:** airy, restrained, soft glow, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#18181b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#8624ff` | Primary action and highlights |

Palette by frequency of use: `#8624ff` · `#18181b` · `#ffffff` · `#71717a` · `#52525b` · `#e4e4e7` · `#09090b` · `#3f3f46` · `#000000` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · body 18px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[100%]` (100%)
- **Shadows:** `shadow-sm`, `shadow-[0_0_24px_rgba(134,36,255,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(134,36,255,0.25)] bg-[#8624FF] text-white hover:opacity-90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #09090b;
  --color-muted: #18181b;
  --color-border: #e4e4e7;
  --color-accent: #8624ff;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#09090b',
    muted: '#18181b',
    line: '#e4e4e7',
    accent: '#8624ff',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Use the violet (#8624ff) for the primary button and the status pill only
- **Do:** Set the headline in one large sans, with a lighter grey second line
- **Do:** Put a soft violet glow behind the hero instead of a solid violet block
- **Don't:** Don't set the page on a violet background; the ground is white
- **Don't:** Don't fill the hero with violet; it works as an accent
- **Don't:** Don't add a second saturated colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
