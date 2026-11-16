# Design system — Messaging Template

`SN-W00532` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft, light chat window sits on a pale sage ground (#f2f6f4) with white panels and rounded corners. Colour stays in the green-grey range: the primary button is a muted green and the selected sidebar row is pale mint (#e0efe5). Inter carries every label, and depth comes from translucent panels and blurred glows rather than hard borders or shadows.

**Mood:** soft, calm, skeuomorphic, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f6f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c3a32` | Headings and primary copy |
| Muted text | `#8b9e92` | Secondary copy, captions |
| Border | `#e0e8e2` | Hairlines, dividers, outlines |
| Accent | `#6b8072` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d5e0d8` · `#f9fcf9` · `#8b9e92` · `#e4ebe6` · `#ecf2ed` · `#2c3a32` · `#6b8072` · `#5b6e62` · `#f5f9f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 16px · h2 16px · body 12px
- **Weights in use:** medium, light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[10px]` (10px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_1px_2px_-1px_rgba(0,0,0,0.05),0_1px_0px_0px_rgba(255,255,255,1)]`, `shadow-[inset_0_1px_0_white,inset_0_-1px_1px_rgba(0,0,0,0.05)]`, `shadow-[inset_0_1px_0_white,inset_0_-1px_1px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-3xl`, `max-w-[85%]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="h-8 px-2 flex items-center gap-1.5 rounded-[5px] bg-gradient-to-b from-[#F9FCF9] to-[#ECF2ED] shadow-[inset_0_1px_0_white,inset_0_-1px_1px_rgba(0,0,0,0.05)] text-[#6B8072] group-hover:text-[#4A5C50] transition-all duration-150 active:scale-[0.96]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2f6f4;
  --color-surface: #ffffff;
  --color-text: #2c3a32;
  --color-muted: #8b9e92;
  --color-border: #e0e8e2;
  --color-accent: #6b8072;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f6f4',
    surface: '#ffffff',
    ink: '#2c3a32',
    muted: '#8b9e92',
    line: '#e0e8e2',
    accent: '#6b8072',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the canvas pale sage (#f2f6f4) and the content panels white (#ffffff)
- **Do:** Use Inter at small sizes for chat text, labels and metadata
- **Do:** Use pale mint (#e0efe5) for selected rows and muted green (#6b8072) for the primary button
- **Don't:** Don't introduce saturated colours; the palette stays in green-grey tones
- **Don't:** Don't remove the soft blurred glow shapes behind the window
- **Don't:** Don't use sharp corners; panels follow the rounded-[10px] radius and buttons are pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
