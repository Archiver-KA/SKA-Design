# Design system — SayHai AI Chatbot Landing Page Template

`SN-W00694` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A light AI-chatbot page with a dark slate headline in a bold sans, where 'dostępny 24/7' is set in a teal-to-blue gradient as the single highlight. A solid teal-blue button leads, with a plain outlined button beside it, and a chat mock-up sits below the copy as proof. The page is clean and friendly, and the chat window is the main piece of product imagery.

**Mood:** clean, friendly, modern, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#14b8a6` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#334155` · `#14b8a6` · `#475569` · `#e2e8f0` · `#3b82f6` · `#94a3b8` · `#2dd4bf` · `#0d9488`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Plus Jakarta Sans, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all shadow-lg flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #14b8a6;
  --color-accent-2: #e2e8f0;
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
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#14b8a6',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one phrase of the headline in a teal-to-blue gradient and keep the rest dark slate
- **Do:** Use a solid teal-blue button as the primary action, with an outlined button beside it
- **Do:** Show the product as a chat window below the copy, framed by a light border
- **Don't:** Don't use the mint background (#ccfbf1) as the page ground; the ground is white
- **Don't:** Don't set the subline in dark slate; it is grey
- **Don't:** Don't add a second gradient to the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
