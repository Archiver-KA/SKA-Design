# Design system — QuietPilot Operations SaaS Landing Page Template

`SN-W00657` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

The page is a near-black, dark-mode command-center landing with a restrained emerald accent. The headline uses Playfair Display at a very large size, and its last line is set in emerald (#10b981) to mark emphasis, with a soft green glow behind the type. Product UI is shown as dark cards with hairline borders and small status chips, so depth comes from light and borders rather than shadow.

**Mood:** dark, operational, calm, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#000000` · `#10b981` · `#064e3b` · `#fbbf24` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(16,185,129,0.5)]`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-emerald-500 text-black font-medium rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** AOS scroll reveal, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in emerald (#10b981) and keep the rest of the headline white
- **Do:** Set headlines in Playfair Display at large size, with Inter for body and UI labels
- **Do:** Build panels with hairline borders on black and use green only for status and emphasis
- **Don't:** Don't add drop shadows to cards; depth comes from the glow and the borders
- **Don't:** Don't introduce a second accent hue in the hero; the hero uses only green on black
- **Don't:** Don't set body copy in the serif display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
