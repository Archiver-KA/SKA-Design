# Design system — AI Automation Services Landing Page Template

`SN-W00058` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a large white sans headline, a grey second line and a teal-green primary button (#0a8f6a). A small green wordmark sits top left, and the hero is centred with a wide grey subline. The style is plain and dark, and the green is used once, on the primary action.

**Mood:** plain, dark, confident, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0a8f6a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a8f6a` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#000000` · `#262626` · `#404040` · `#171717` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-[0_0_40px_8px_rgba(10,143,106,0.35)]`
- **Content width:** `max-w-[200px]`, `max-w-[180px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 bg-[#0A8F6A]/10 border border-[#0A8F6A]/20 text-[#0A8F6A] hover:bg-[#0A8F6A] hover:text-white text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #0a8f6a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#0a8f6a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal-green (#0a8f6a) for the primary button only
- **Do:** Keep the page ground black with white headings
- **Do:** Set the subline in light grey (#a3a3a3)
- **Don't:** Don't add more than one accent colour to the hero
- **Don't:** Don't switch the layout to a light theme
- **Don't:** Don't set body text in the green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
