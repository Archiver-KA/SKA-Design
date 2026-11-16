# Design system — DevBoard Community Forum Template

`SN-W03587` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The forum is a plain, functional list. It sits on a light grey ground (#fafafa) with white cards outlined by hairline borders, and a single near-black button handles the main action. Thread titles are bold and modest in size, with a grey line of author and time beneath each one and a small count at the right. Nothing decorative is added; the layout is built for scanning titles.

**Mood:** plain, functional, quiet, neutral, readable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#eaeaea` | Hairlines, dividers, outlines |
| Accent | `#111111` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#eaeaea` · `#ffffff` · `#fafafa` · `#666666` · `#444444` · `#888888` · `#999999` · `#cccccc` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 18px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_4px_12px_rgba(0,0,0,0.03)]`, `shadow-sm`, `shadow-[0_2px_8px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="text-[#888] hover:text-[#111] p-1 rounded-md hover:bg-[#f5f5f5] transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #666666;
  --color-border: #eaeaea;
  --color-accent: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#666666',
    line: '#eaeaea',
    accent: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set thread titles in bold near-black (#111111) with a grey author and time line beneath
- **Do:** Use hairline borders on white cards over the light grey ground
- **Do:** Keep the New Discussion button near-black as the only solid button in the header
- **Don't:** Don't add colour accents; the forum stays neutral
- **Don't:** Don't use shadows to lift the cards
- **Don't:** Don't enlarge headings beyond the scale of the thread titles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
