# Design system — Fuin Web3 IAM Landing Page Template

`SN-W00406` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black, almost monochrome landing page where the lime accent (#c8ff00) does the signalling: the primary button, the top-right link and the small outlined eyebrow label. The headline is set in Space Grotesk at very large size, tight and heavy, so the wordmark FUIN carries the first screen. Grey body copy and hairline borders keep everything else quiet.

**Mood:** stark, monochrome, technical, bold display type, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#060606` | Page ground |
| Text | `#f0f0f0` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8ff00` | Primary action and highlights |

Palette by frequency of use: `#c8ff00` · `#ffffff` · `#888888` · `#060606` · `#777777` · `#f0f0f0` · `#aaaaaa` · `#555555` · `#e0e0e0` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Syne
- **Scale (largest breakpoint):** h1 176px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_8px_rgba(200,255,0,0.6)]`, `shadow-[0_0_12px_rgba(200,255,0,0.6)]`, `shadow-[0_0_24px_rgba(200,255,0,0.25)]`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="font-['Syne',sans-serif] flex items-center justify-center gap-2 px-8 py-4 bg-[#c8ff00] text-[#060606] rounded-full text-sm font-semibold tracking-wide hover:shadow-[0_0_24px_rgba(200,255,0,0.25)] hover:-translate-y-0.5 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Code / terminal (`code-terminal`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #060606;
  --color-text: #f0f0f0;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #c8ff00;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#060606',
    ink: '#f0f0f0',
    muted: '#888888',
    line: '#ffffff',
    accent: '#c8ff00',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Use the lime (#c8ff00) only for the primary button, the top-right link and the eyebrow label
- **Do:** Set hero headlines in Space Grotesk at display size with tight tracking
- **Do:** Use an outlined dark button for the secondary action beside the lime primary
- **Don't:** Don't put lime on large surfaces; it works as a signal, not a background
- **Don't:** Don't set body copy in lime or pure white; use the muted grey (#888888)
- **Don't:** Don't add a second accent colour; the page runs on one lime and greys

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
