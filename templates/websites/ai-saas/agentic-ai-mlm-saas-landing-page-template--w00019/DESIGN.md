# Design system — Agentic AI MLM SaaS Landing Page Template

`SN-W00019` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, editorial hero sits on a near-white page, with a very large heavy uppercase headline, 'LEADERSHIP FOR THE AGENTIC AERA', set in black and its middle words in grey. A small orange dot marks the wordmark, and the sign-in and language controls sit on a thin top bar. A dark vertical rail of icons runs down the right edge, which is the only heavy dark element.

**Mood:** editorial, bold, light, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#262626` · `#a3a3a3` · `#e5e5e5` · `#f5f5f5` · `#525252` · `#737373` · `#d4d4d4` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Space Grotesk, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 48px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[96rem]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-3.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Sign-in form (`auth-form`)
2. Sidebar (`sidebar`)
3. Modal / overlay (`modal-overlay`)
4. Navigation bar (`navbar`)
5. Hero (`hero`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #171717;
  --color-text: #171717;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #f87171;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#171717',
    ink: '#171717',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#f87171',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large heavy uppercase with tight leading
- **Do:** Use grey for the middle words of the headline as a secondary tone
- **Do:** Keep the orange dot as the only brand colour in the header
- **Don't:** Don't place the dark icon rail over the headline text
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't add a second colour to the hero block

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
