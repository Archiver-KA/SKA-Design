# Design system — AI Visibility Agency Landing Page Template

`SN-W01429` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large sans headline in white, where the phrase 'Reddit.' is set in a vivid orange-red (#ff4500) italic, the single strong colour on the screen. The primary button is a pale solid and the secondary is a dark outline. The contrast of one hot accent on black makes the claim feel direct and combative.

**Mood:** direct, combative, high-contrast, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0e17` | Page ground |
| Surface | `#131a28` | Cards, panels, raised areas |
| Text | `#f5f3ee` | Headings and primary copy |
| Muted text | `#8993a8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff4500` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ff4500` · `#8993a8` · `#f5f3ee` · `#ffffff` · `#131a28` · `#12151c` · `#34d399` · `#0a0e17` · `#0d121d` · `#edeae3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Inter, IBM Plex Mono, Instrument Serif, Manrope, Geist Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="mt-6 block text-center rounded-full bg-[#FF4500] px-5 py-3 text-sm font-medium text-[#0A0E17] hover:bg-[#ff5c1f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E17] font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Services (`services`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0e17;
  --color-surface: #131a28;
  --color-text: #f5f3ee;
  --color-muted: #8993a8;
  --color-border: #ffffff;
  --color-accent: #ff4500;
  --color-accent-2: #34d399;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0e17',
    surface: '#131a28',
    ink: '#f5f3ee',
    muted: '#8993a8',
    line: '#ffffff',
    accent: '#ff4500',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the key phrase in orange-red (#ff4500) and keep the rest of the headline white.
- **Do:** Keep the ground near-black with white headline type and grey support text.
- **Do:** Make the primary button a pale solid with dark text, and the secondary a dark outline.
- **Don't:** Don't use the orange-red for buttons; it is for the highlighted phrase.
- **Don't:** Don't set the headline in serif; it is sans.
- **Don't:** Don't use a light background; the page is near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
