# Design system — Riddem Pest Control | Apex, NC’s 5-Star Pest Elimination Specialists

`SN-W04082` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, aggressive hero with the second headline line in neon green (#39ff14) and a solid green primary button on a near-black field. White display type on the first line contrasts with the glowing green line beneath it. Faint background imagery stays barely visible, so the green and the text remain the focus.

**Mood:** aggressive, stark, high-contrast, neon, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#39ff14` | Primary action and highlights |

Palette by frequency of use: `#39ff14` · `#ffffff` · `#27272a` · `#a1a1aa` · `#18181b` · `#000000` · `#71717a` · `#09090b` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(57,255,20,0.3)]`, `shadow-[0_0_30px_rgba(57,255,20,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-[#39FF14] px-6 text-sm font-semibold text-black transition-all hover:bg-[#2fe00e] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #39ff14;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#39ff14',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in neon green (#39ff14) on near-black (#09090b)
- **Do:** Use the solid green button with black text for the main call to action
- **Do:** Keep background imagery faint behind the hero copy
- **Don't:** Don't use neon green for body text; it is for headlines and the button
- **Don't:** Don't place green text on light backgrounds
- **Don't:** Don't add a second neon colour to the same section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
