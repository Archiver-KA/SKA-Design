# Design system — Digital Marketing Agency Landing Page Template

`SN-W01546` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with an oversized two-line headline, the first word in red and the second in deep navy, which sets the two-colour system. The type is heavy sans-serif at poster size, and small body copy sits beneath with a thin red rule. Navy carries the buttons and the navigation call to action, and red is kept for the headline and the rule.

**Mood:** bold, two-colour, poster, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#1e1e50` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e1e50` | Primary action and highlights |
| Second accent | `#da3531` | Supporting highlights |

Palette by frequency of use: `#1e1e50` · `#da3531` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 176px · h2 14px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[#da3531]/30`
- **Content width:** `max-w-[1920px]`, `max-w-7xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="px-6 py-2.5 text-sm font-semibold text-white bg-[#1e1e50] rounded-full hover:bg-[#da3531] hover:shadow-lg hover:shadow-[#da3531]/30 transition-all duration-300 tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Marquee (`marquee`)
4. Hero (`hero`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #1e1e50;
  --color-border: #ffffff;
  --color-accent: #1e1e50;
  --color-accent-2: #da3531;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#1e1e50',
    line: '#ffffff',
    accent: '#1e1e50',
    accent2: '#da3531',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero in heavy sans-serif with one word in red (#da3531) and one in navy (#1e1e50)
- **Do:** Use navy (#1e1e50) for buttons and the navigation call to action
- **Do:** Keep a thin red rule beside body copy as the only decorative line
- **Don't:** Don't use red for buttons
- **Don't:** Don't add a third colour to the hero
- **Don't:** Don't reduce the headline below poster size; scale carries the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
