# Design system — AI Gateway SaaS Landing Page Template

`SN-W00097` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

MQL is a dark, warm gateway page on a black ground with a soft amber glow in the top half. The headline is large white sans with the second line in a bright yellow (#fde047), and the yellow also fills the primary button.

**Mood:** dark, warm, bold, direct, high-energy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fde047` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fde047` · `#262626` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#e5e5e5` · `#10b981` · `#171717` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h3 12px · body 20px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_20px_rgba(253,224,71,0.1)]`, `shadow-[0_0_25px_rgba(253,224,71,0.3)]`, `shadow-[0_0_40px_rgba(253,224,71,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-2.5`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2.5 bg-[#FDE047] text-black px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight hover:bg-[#fef08a] transition-all shadow-[0_0_25px_rgba(253,224,71,0.3)] hover:shadow-[0_0_40px_rgba(253,224,71,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Stats band (`stats`)
3. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fde047;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #fde047;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fde047',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#fde047',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans, with the key phrase in yellow (#fde047)
- **Do:** Fill the primary button with yellow and keep the secondary button dark
- **Do:** Keep the amber glow to the top of the hero, not across the whole page
- **Don't:** Don't use yellow as a full page background; it is an accent on black
- **Don't:** Don't set the body text in dark grey on black; it needs the light grey
- **Don't:** Don't add a second bright colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
