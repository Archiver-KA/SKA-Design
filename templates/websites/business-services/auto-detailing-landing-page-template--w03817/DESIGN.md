# Design system — Auto Detailing Landing Page Template

`SN-W03817` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, high-contrast page on a near-black ground with white Space Mono type set very large in uppercase. The second line of the headline is outlined rather than filled, and a single red (#ff2a2a) word and the buttons carry the colour, so the red reads as the one signal on the page. Rounded pills and small square corners appear together in the navigation and controls.

**Mood:** stark, monospaced, high-contrast, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff2a2a` | Primary action and highlights |

Palette by frequency of use: `#ff2a2a` · `#ffffff` · `#000000` · `#6b7280` · `#111111` · `#9ca3af` · `#0a0a0a` · `#050505` · `#374151` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Mono, Unbounded
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 12px
- **Weights in use:** semibold, extrabold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,42,42,0.3)]`, `shadow-[0_0_30px_rgba(255,42,42,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-2`

**Primary button**

```html
<a class="bg-[#FF2A2A] text-black font-['Unbounded'] font-semibold text-xs px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff2a2a;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff2a2a',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Mono in uppercase, and keep the outlined style for the second line only.
- **Do:** Use the red (#ff2a2a) for one highlighted word or the primary button per section.
- **Do:** Keep the ground near-black (#0a0a0a) with white text.
- **Don't:** Don't add a second accent colour beside the red.
- **Don't:** Don't set body copy in a typeface other than Space Mono.
- **Don't:** Don't fill the outlined headline line with solid colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
