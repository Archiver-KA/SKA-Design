# Design system — DigitalArc Creative Agency

`SN-W01557` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with bold uppercase white headlines in Geist and a single white pill button as the primary call to action. The first screen is almost entirely monochrome, with a dark video slot sitting under the headline and no colour at all. Contrast is the whole system: white on black, separated by the page ground rather than boxes.

**Mood:** monochrome, bold, stark, creative, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#09090b` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono, Inter
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 24px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-3xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="focus-visible:ring-ring/50 border border-transparent bg-clip-padding focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none bg-primary h-12 rounded-full px-8 text-base font-medium uppercase text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/80">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-text: #ffffff;
  --color-border: #27272a;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    ink: '#ffffff',
    line: '#27272a',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the page monochrome, using white on near-black (#09090b)
- **Do:** Use the white pill button for the single primary call to action
- **Do:** Set headlines in Geist in uppercase at large size
- **Don't:** Don't introduce a brand colour; the design relies on black and white alone
- **Don't:** Don't draw outlined boxes around sections; separation comes from the dark ground
- **Don't:** Don't place light cards on the dark ground, which breaks the single-tone system

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
