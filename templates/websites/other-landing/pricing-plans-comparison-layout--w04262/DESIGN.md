# Design system — Pricing Plans Comparison Layout

`SN-W04262` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained dark pricing layout built on near-black (#101010) with slightly lighter card surfaces and hairline borders. Blue (#60a5fa) marks only the featured plan's outline and its primary button, so the eye lands on one choice. Inter sets every line in a single family, and plain check-marked feature lists carry the detail.

**Mood:** restrained, functional, dark, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101010` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#232323` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |

Palette by frequency of use: `#232323` · `#d1d5db` · `#60a5fa` · `#9ca3af` · `#171717` · `#e5e7eb` · `#ffffff` · `#2a2a2a` · `#6b7280` · `#151515`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="w-full py-3 px-4 bg-[#232323] hover:bg-[#2a2a2a] text-gray-200 rounded-lg font-medium transition duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Hero (`hero`)
3. Pricing (`pricing`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #101010;
  --color-surface: #171717;
  --color-text: #d1d5db;
  --color-muted: #9ca3af;
  --color-border: #232323;
  --color-accent: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101010',
    surface: '#171717',
    ink: '#d1d5db',
    muted: '#9ca3af',
    line: '#232323',
    accent: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the featured plan's border and primary button in blue (#60a5fa) and keep the other plans neutral
- **Do:** Keep all text in Inter, with the heading at 30px and body copy in muted grey
- **Do:** Mark included features with a blue check and excluded ones with a grey cross
- **Don't:** Don't add a second accent colour to the plan cards
- **Don't:** Don't put gradients or glow behind the pricing cards
- **Don't:** Don't set the secondary buttons in the accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
