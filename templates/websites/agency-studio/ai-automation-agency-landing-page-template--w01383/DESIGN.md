# Design system — AI Automation Agency Landing Page Template

`SN-W01383` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred headline in Inter, where the first line is white and the second is a grey gradient on intelligent automation. A thin indigo-tinted nav bar sits at the top, with a white primary button and a dark indigo secondary below the copy. Indigo (#6366f1) is the accent for the badge and buttons, and the page relies on grey gradients rather than colour for emphasis.

**Mood:** dark, restrained, indigo, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a78bfa` · `#1e1b4b` · `#6366f1` · `#312e81` · `#3730a3` · `#000000` · `#c7d2fe` · `#a5b4fc` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Google Sans Flex
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(255,255,255,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-colors bg-white text-black hover:bg-indigo-200 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the ground near black and headlines in white Inter, centred.
- **Do:** Use indigo (#6366f1) for the badge, the nav tint and the secondary button.
- **Do:** Set the second headline line in a grey gradient rather than a colour.
- **Don't:** Don't use indigo as a large fill; it is for small accents and buttons.
- **Don't:** Don't set the hero on a white ground; the first screen is dark.
- **Don't:** Don't add a second gradient colour to the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
