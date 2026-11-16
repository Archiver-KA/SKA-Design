# Design system — Creator Marketing Skills Landing Page Template

`SN-W01504` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm cream page (#fffdf5) with a playful, heavy uppercase headline in near-black, where flat yellow (#fde047) and pink (#f9a8d4) pills sit between the words like highlighter marks. Soft pink and yellow glows sit behind the headline, and a solid blue button (#2563eb) leads the calls to action beside a white outlined button. The mix is bright and handmade, but it keeps to a few flat colours.

**Mood:** playful, bright, handmade, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#fde047` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f9a8d4` · `#fde047` · `#2563eb` · `#f5f5f4` · `#0f172a` · `#fffdf5` · `#e7e5e4` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Syne
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 18px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`, `shadow-none`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full font-normal text-sm hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Booking form (`booking`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffdf5;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-border: #000000;
  --color-accent: #2563eb;
  --color-accent-2: #fde047;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf5',
    surface: '#ffffff',
    ink: '#0f172a',
    line: '#000000',
    accent: '#2563eb',
    accent2: '#fde047',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase near-black sans, and place flat yellow (#fde047) or pink (#f9a8d4) pills between words.
- **Do:** Keep the page ground cream (#fffdf5) and the glows soft and behind the headline.
- **Do:** Use the blue (#2563eb) only for the primary button.
- **Don't:** Don't add gradients to the pills; they are flat colour.
- **Don't:** Don't use more than one blue element per screen.
- **Don't:** Don't set body copy in pink or yellow; it stays near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
