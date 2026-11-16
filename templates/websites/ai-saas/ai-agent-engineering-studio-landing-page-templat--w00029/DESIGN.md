# Design system — AI Agent Engineering Studio Landing Page Template

`SN-W00029` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, glowing tech stance: a near-black green-tinted ground (#0b0f0d) with a single neon green (#00ff88) used for the badge, the primary button and a soft glow behind the large headline. Outfit at about 96px carries the headline in near-white (#e6f0eb), with Inter for body copy. The glow and the pill badge do the work that imagery would do on a lighter page.

**Mood:** futuristic, dark, glowing, technical, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f0d` | Page ground |
| Text | `#e6f0eb` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff88` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0b0f0d` · `#000000` · `#e6f0eb` · `#1f2923` · `#00ff88`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,255,136,0.4)]`, `shadow-[0_0_15px_rgba(0,255,136,0.2)]`, `shadow-[0_0_50px_rgba(0,255,136,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-120`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:block px-5 py-2 text-xs font-medium tracking-wide uppercase border border-brand-neon/30 text-brand-neon rounded hover:bg-brand-neon/10 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0f0d;
  --color-text: #e6f0eb;
  --color-border: #ffffff;
  --color-accent: #00ff88;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0f0d',
    ink: '#e6f0eb',
    line: '#ffffff',
    accent: '#00ff88',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Outfit at about 96px in near-white (#e6f0eb)
- **Do:** Use the neon green (#00ff88) only for the primary button, the badge and the glow
- **Do:** Put a soft green glow behind the headline instead of adding decorative images
- **Don't:** Don't use a white or light page ground; the look depends on the dark green-black
- **Don't:** Don't set body text in neon green; it is for accents and actions
- **Don't:** Don't add other saturated accents to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
