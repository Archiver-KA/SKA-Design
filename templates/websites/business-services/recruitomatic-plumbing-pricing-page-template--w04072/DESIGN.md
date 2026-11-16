# Design system — Recruitomatic Plumbing Pricing Page Template

`SN-W04072` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, precise landing page where the headline is white sans and its second line is set in light blue (#60a5fa). Small blue and green details appear in the logo mark and the eyebrow badge, and a grey pill button sits in the navigation. Panels are dark with soft blue light at their edges, giving the page a calm, businesslike tone.

**Mood:** precise, dark, calm, businesslike, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#10b981` · `#18181b` · `#34d399` · `#d4d4d8` · `#3b82f6` · `#60a5fa` · `#fbbf24` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 18px · h3 12px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]`, `shadow-lg`, `shadow-blue-900/20`
- **Content width:** `max-w-[90rem]`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg border border-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Stats band (`stats`)
5. Marquee (`marquee`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, with the second line in light blue (#60a5fa)
- **Do:** Keep the page on a near-black ground (#18181b) with dark panels
- **Do:** Use the green (#10b981) only for the logo mark and small positive signals
- **Don't:** Don't use blue as a large background fill; it is a text and detail colour here
- **Don't:** Don't set body copy in pure white; supporting text stays muted grey
- **Don't:** Don't add bright colour blocks to the protocol section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
