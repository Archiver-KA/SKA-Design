# Design system — Team Pricing Plans and Features

`SN-W04303` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, quiet pricing page built on near-black [#101014] with white headings and a single indigo [#4f46e5] accent reserved for the recommended plan's button. The three plan cards sit on slightly lifted panels with hairline borders, and the middle plan is set apart by its indigo button rather than by size or shadow. Satoshi headlines and Inter body text keep the page clean and easy to scan.

**Mood:** calm, precise, minimal, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101014` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4f46e5` · `#4338ca` · `#101014` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Satoshi
- **Body:** Inter
- **Loaded families:** Manrope, Inter, Satoshi
- **Scale (largest breakpoint):** h1 48px · h2 24px · body 18px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px)
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="mt-auto inline-block w-full text-center py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)
3. Comparison (`comparison`)
4. Call to action (`cta`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #101014;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #4f46e5;
  --font-display: "Satoshi", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101014',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Satoshi'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#4f46e5) only for the primary button of the recommended plan
- **Do:** Keep headings in Satoshi and body text in Inter
- **Do:** Build plan cards with rounded-xl corners and hairline borders
- **Don't:** Don't add drop shadows or glow to the plan cards
- **Don't:** Don't add a second highlight colour to the comparison table
- **Don't:** Don't use a light background for the pricing section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
