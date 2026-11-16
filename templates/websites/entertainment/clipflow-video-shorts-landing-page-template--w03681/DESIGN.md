# Design system — ClipFlow Video Shorts Landing Page Template

`SN-W03681` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bright white page with a pale aqua wash, a heavy black headline and a single teal (#00e5cc) underline beneath its key phrase. The main element is a long input field with a teal button at its right end, so the hero is built around one paste-and-go action. Small pill tags and uppercase captions beneath it explain the steps.

**Mood:** fresh, direct, tech, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#00e5cc` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#00e5cc` · `#f3f4f6` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#a855f7` · `#111827` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-black/5`, `shadow-none`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #00e5cc;
  --color-accent-2: #a855f7;
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
    surface: '#f3f4f6',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#00e5cc',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#00e5cc) for the underline and the main button only
- **Do:** Set the headline in heavy black sans-serif, with an underline under one phrase
- **Do:** Make the input field the centre of the hero, with its action at the right end
- **Don't:** Don't use the teal for text on the white background
- **Don't:** Don't add a second button colour in the hero
- **Don't:** Don't centre-align long paragraphs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
