# Design system — AI Governance Runtime Landing Page Template

`SN-W00099` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

PrivateVault is a dark enterprise security page on a near-black navy ground (#030407), with a large white sans headline that fades to grey at its base. A small cyan (#00e5ff) pill tag sits above the title, and the primary button is white with a secondary dark outline button beside it. The design is restrained and uses cyan only for the status tag and small signals.

**Mood:** dark, enterprise, restrained, security-minded, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030407` | Page ground |
| Surface | `#111213` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8b93a1` | Secondary copy, captions |
| Border | `#2e2e32` | Hairlines, dividers, outlines |
| Accent | `#00e5ff` | Primary action and highlights |
| Second accent | `#00e5ff` | Supporting highlights |

Palette by frequency of use: `#2e2e32` · `#ffffff` · `#8b93a1` · `#1f2025` · `#27a644` · `#00e5ff` · `#8fa6ff` · `#b1b3b8` · `#f34e52` · `#08090a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Variable
- **Body:** Inter Variable
- **Loaded families:** Inter Variable
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[8px]` (8px), `rounded-full` (9999px), `rounded-[4px]` (4px)
- **Shadows:** `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`, `shadow-[0_0_15px_rgba(0,229,255,0.2)]`
- **Content width:** `max-w-[1100px]`, `max-w-[85%]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-xs px-3 py-1.5 rounded-[8px] bg-[#ffffff] text-[#08090a] font-medium hover:bg-[#b1b3b8] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Pricing (`pricing`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030407;
  --color-surface: #111213;
  --color-text: #ffffff;
  --color-muted: #8b93a1;
  --color-border: #2e2e32;
  --color-accent: #00e5ff;
  --color-accent-2: #00e5ff;
  --font-display: "Inter Variable", sans-serif;
  --font-body: "Inter Variable", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030407',
    surface: '#111213',
    ink: '#ffffff',
    muted: '#8b93a1',
    line: '#2e2e32',
    accent: '#00e5ff',
    accent2: '#00e5ff',
  },
  fontFamily: { display: ['Inter Variable'], sans: ['Inter Variable'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white Inter with a grey fade on the last line
- **Do:** Use the cyan (#00e5ff) for the status tag and small signals only
- **Do:** Pair one white primary button with one dark outline button
- **Don't:** Don't use the green (#27a644) as an accent; cyan is the accent
- **Don't:** Don't add colour to the headline; it stays white and grey
- **Don't:** Don't use bright fills for the secondary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
