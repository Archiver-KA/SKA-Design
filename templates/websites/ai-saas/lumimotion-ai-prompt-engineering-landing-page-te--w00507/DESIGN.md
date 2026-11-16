# Design system — Lumimotion | AI Prompt Engineering Landing Page Template

`SN-W00507` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, premium prompt-library page on a near-black ground (#05080a) with large white Inter headlines and a single lime (#c6f91f) button pair as the only colour. Square-cornered action buttons contrast with a soft blurred glow behind the headline. The lime carries every action, so the page reads as sharp, designerly and deliberate.

**Mood:** sharp, premium, dark, designerly, deliberate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080a` | Page ground |
| Surface | `#0b0f12` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6f91f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c6f91f` · `#05080a` · `#000000` · `#0b0f12` · `#aade17` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded` (4px)
- **Shadows:** `shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]`, `shadow-[0_0_8px_#c6f91f]`, `shadow-[0_0_20px_rgba(198,249,31,0.2)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#c6f91f] text-black px-5 py-2.5 text-xs font-semibold flex items-center gap-2 hover:bg-[#aade17] transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** GSAP, Unicorn Studio (WebGL scenes), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #05080a;
  --color-surface: #0b0f12;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c6f91f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05080a',
    surface: '#0b0f12',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c6f91f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#c6f91f) only for primary and secondary action buttons.
- **Do:** Keep headlines in white Inter at large size over the dark ground.
- **Do:** Place the soft blurred glow behind the headline, not behind the body copy.
- **Don't:** Don't use the lime for text or body copy.
- **Don't:** Don't round the main action buttons; they are square.
- **Don't:** Don't add a second bright hue beside the lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
