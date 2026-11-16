# Design system — Product Designer Portfolio Template

`SN-W02190` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep purple-black page with a dark violet ground (#0c0621), white Inter headlines and thin grey-white panel borders dividing the sections. Violet glows sit behind the hero and a thin-bordered grid frames the content. The headline uses short plain sentences, and the only saturated colour is the violet ground and its glow.

**Mood:** dark, violet, structured, framed, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0621` | Page ground |
| Surface | `#0c0621` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c084fc` · `#000000` · `#0c0621` · `#0a051e` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 18px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group relative overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 px-10 py-6 rounded-sm transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0621;
  --color-surface: #0c0621;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0621',
    surface: '#0c0621',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use dark violet (#0c0621) as the page ground with white text
- **Do:** Frame sections with thin white-bordered panels
- **Do:** Keep the violet glow behind the hero and away from the text
- **Don't:** Don't switch to a light page; the ground is dark.
- **Don't:** Don't add bright accent colours beyond the glow
- **Don't:** Don't set headlines in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
