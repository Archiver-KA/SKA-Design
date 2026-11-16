# Design system — GymBot AI Landing Page Template

`SN-W00432` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark page with a centred headline set in two tones: white for the main claim and grey for the second clause. Orange (#f97316) appears only in the small source tag and the bot's status line, and a chat-style panel below the copy shows the assistant at work. The layout is centred and conversational, and it demonstrates the product in the hero rather than describing it.

**Mood:** conversational, dark, warm, clear, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#000000` · `#18181b` · `#27272a` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#09090b` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-sm`
- **Content width:** `max-w-[85%]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="text-sm font-medium bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Marquee (`marquee`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f97316;
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
    background: '#09090b',
    surface: '#27272a',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep orange (#f97316) to the source tag and small status text
- **Do:** Set the headline's second clause in grey, below a white first clause
- **Do:** Show the product as a chat panel in the hero
- **Don't:** Don't use orange for the headline or large fills
- **Don't:** Don't move the chat panel below the first screen; it is the proof
- **Don't:** Don't use a light background; the page is near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
