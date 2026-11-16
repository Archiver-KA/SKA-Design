# Design system — Global Creator Agency Landing Page Template

`SN-W01584` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with a large white grotesk headline set on three lines, the last line fading into dim grey so it recedes. A small lime (#dfff00) tag marks the campaign and is the only saturated colour in the masthead area. Small monospaced captions sit at the edges, so the layout reads like a news masthead rather than a sales page.

**Mood:** editorial, stark, news-like, layered, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#dfff00` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#dfff00` · `#ffffff` · `#27272a` · `#a1a1aa` · `#000000` · `#18181b` · `#71717a` · `#52525b` · `#050505` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Anton
- **Body:** Inter
- **Loaded families:** Anton, Inter, Manrope, Space Mono
- **Scale (largest breakpoint):** h1 136px · h2 36px · h3 24px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="border border-zinc-700 hover:border-brand-yellow px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:text-black hover:bg-brand-yellow transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Testimonials (`testimonials`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #dfff00;
  --color-accent-2: #10b981;
  --font-display: "Anton", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#dfff00',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Anton'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large grotesk caps, stacked on three lines
- **Do:** Step the last headline line down into dim grey
- **Do:** Use lime (#dfff00) for the tag and the single live indicator only
- **Don't:** Don't use lime for headlines or buttons
- **Don't:** Don't add photography to the masthead; the type leads
- **Don't:** Don't set the small captions larger than the navigation labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
