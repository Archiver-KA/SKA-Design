# Design system — AI Consulting Pricing Plans

`SN-W01403` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy page on [#111827] with a three-column pricing grid, where the middle plan is marked by a blue border (#3b82f6), a blue pill badge and a blue button. The heading uses one blue word, 'Investments', against white, and the check marks are green. Cards are a slightly lighter navy with hairline borders, so depth comes from tone rather than shadow.

**Mood:** clear, structured, dark, corporate, tiered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#d1d5db` · `#3b82f6` · `#111827` · `#1f2937` · `#93c5fd` · `#374151` · `#f3f4f6` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Sans
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Sans
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 18px
- **Weights in use:** bold, medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="block w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "IBM Plex Sans", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['IBM Plex Sans'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Mark the recommended plan with the blue border (#3b82f6), badge and button, and no other card.
- **Do:** Use green (#10b981) only for the check marks.
- **Do:** Keep the cards one step lighter than the page (#1f2937 on #111827) with hairline borders.
- **Don't:** Don't add shadows to the cards; depth comes from tone and borders.
- **Don't:** Don't use blue for more than one word per heading.
- **Don't:** Don't use the green for buttons or prices.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
