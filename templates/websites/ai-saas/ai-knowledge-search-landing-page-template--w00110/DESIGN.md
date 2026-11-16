# Design system — AI Knowledge Search Landing Page Template

`SN-W00110` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

AIThink is a dark, glowing launcher page on a near-black ground (#0a0a0a) with a violet haze behind the hero. The headline is large white sans, with a second line in a grey gradient, and a large dark command-bar panel sits below the sub-line. Violet is the main glow colour, and the red-outlined download button is the one sharp edge on the first screen.

**Mood:** dark, glowing, focused, product-led, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#ef4444` · `#0a0a0a` · `#111111` · `#e5e7eb` · `#080808` · `#000000` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · body 20px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors text-xs text-gray-400 hover:text-white font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #9333ea;
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
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#9333ea',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans with a grey gradient on the second line
- **Do:** Use the violet glow (#9333ea) behind the hero only, not on buttons
- **Do:** Show the search bar as a large dark panel with a subtle border
- **Don't:** Don't use the red (#ef4444) as the page background; it is the button outline
- **Don't:** Don't add a full violet background; the glow is soft and local
- **Don't:** Don't set the command bar in a light colour; it stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
