# Design system — TruthRecord Activism & Advocacy Template

`SN-W03652` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, documentary-style donation page on a near-black ground, with a deep red glow spreading behind the hero. The headline is a large serif in white, with its central word in bright red (#b91c1c), and the body copy is cream and centred. Buttons are red and outlined, and a small italic serif footnote keeps the tone of a sourced record.

**Mood:** documentary, urgent, serious, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#1f1f2e` | Cards, panels, raised areas |
| Text | `#f0ece4` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#93c5fd` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f87171` · `#b91c1c` · `#93c5fd` · `#0a0a0f` · `#60a5fa` · `#1e3a8a` · `#f0ece4` · `#ef4444` · `#fca5a5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Neuton
- **Body:** Neuton
- **Loaded families:** Cinzel Decorative, Neuton
- **Scale (largest breakpoint):** body 12px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Video / media (`video-media`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #1f1f2e;
  --color-text: #f0ece4;
  --color-border: #ffffff;
  --color-accent: #b91c1c;
  --color-accent-2: #93c5fd;
  --font-display: "Neuton", sans-serif;
  --font-body: "Neuton", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#1f1f2e',
    ink: '#f0ece4',
    line: '#ffffff',
    accent: '#b91c1c',
    accent2: '#93c5fd',
  },
  fontFamily: { display: ['Neuton'], sans: ['Neuton'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif, with the key word in red (#b91c1c)
- **Do:** Use red for the primary button and the highlighted headline word only
- **Do:** Keep the ground near-black (#0a0a0f) with cream body text (#f0ece4)
- **Don't:** Don't use red for body text
- **Don't:** Don't add light backgrounds to sections
- **Don't:** Don't use more than one italic line in a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
