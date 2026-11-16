# Design system — AI Agency Landing Page Template

`SN-W01371` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black indigo page with a centred headline in Inter, where the first line is white and the second is a lavender gradient. A white primary button sits beside an outlined dark secondary, and a dark dashboard frame sits low on the page as a product preview. The violet glow is faint and lives in the background, so the lavender carries the emphasis on one phrase only.

**Mood:** dark, violet, product-led, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030014` | Page ground |
| Surface | `#030014` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a78bfa` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#8b5cf6` · `#64748b` · `#cbd5e1` · `#030014` · `#a78bfa` · `#334155` · `#10b981` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.2)]`, `shadow-2xl`, `shadow-[0_0_15px_rgba(139,92,246,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. About (`about`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030014;
  --color-surface: #030014;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a78bfa;
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
    background: '#030014',
    surface: '#030014',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a78bfa',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the ground at #030014 and headlines in white Inter, large and centred.
- **Do:** Apply the lavender (#a78bfa) gradient to one headline phrase per hero.
- **Do:** Keep the primary button white and the secondary a dark outlined pill.
- **Don't:** Don't use the lavender for buttons or large fills.
- **Don't:** Don't place the product frame above the headline; it sits below the calls to action.
- **Don't:** Don't add a second gradient phrase to the same section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
