# Design system — D2C CPG Landing Page Template

`SN-W01135` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A bold food packaging page on a saturated amber hero, with a heavy dark brown sans-serif headline and a red pill button for the call to action. Stacked product packets fan out on the right, with a black pill label marking the pack count. The pale cream band under the hero sets off the amber, so the page reads as loud, cheerful and direct.

**Mood:** bold, cheerful, saturated, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff0c8` | Page ground |
| Surface | `#fff7dc` | Cards, panels, raised areas |
| Text | `#2a1708` | Headings and primary copy |
| Border | `#2a1708` | Hairlines, dividers, outlines |
| Accent | `#d93622` | Primary action and highlights |
| Second accent | `#fff0c8` | Supporting highlights |

Palette by frequency of use: `#2a1708` · `#d93622` · `#fff7dc` · `#fff0c8` · `#67a348` · `#f5a800` · `#78350f` · `#42230b` · `#4b2a10` · `#5b3514`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-amber-950/20`, `shadow-amber-950/30`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-10`, `gap-2`

**Primary button**

```html
<a class="rounded-full bg-[#D93622] px-5 py-3 text-xs font-semibold transition hover:bg-[#BC2C1C]">…</a>
```

## Motion, effects and stack

- **Effects:** large blurred glow shapes, custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff0c8;
  --color-surface: #fff7dc;
  --color-text: #2a1708;
  --color-border: #2a1708;
  --color-accent: #d93622;
  --color-accent-2: #fff0c8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff0c8',
    surface: '#fff7dc',
    ink: '#2a1708',
    line: '#2a1708',
    accent: '#d93622',
    accent2: '#fff0c8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy sans-serif in dark brown (#2a1708)
- **Do:** Use the red (#d93622) only for the main pill button
- **Do:** Show the product packets large and fanned on the right, with a black pill label
- **Don't:** Don't use pale amber as a button fill; the button is red
- **Don't:** Don't set small copy in red; it is for the button only
- **Don't:** Don't add a second saturated colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
