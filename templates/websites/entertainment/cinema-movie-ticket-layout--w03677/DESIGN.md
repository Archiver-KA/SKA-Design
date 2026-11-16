# Design system — Cinema Movie Ticket Layout

`SN-W03677` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinema ticket drawn as a dark indigo card, with a perforated stub edge on the left where a vertical yellow label carries the show name. Yellow (#fde047) marks the film title, the barcode and the key values, and everything else is light grey on indigo. The card's shape and barcode carry the branding, with no imagery.

**Mood:** nostalgic, playful, graphic, nocturnal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#14121a` | Page ground |
| Text | `#9ca3af` | Headings and primary copy |
| Border | `#22213a` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |
| Second accent | `#23203a` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#14121a` · `#f3f4f6` · `#fde047` · `#22213a` · `#fef08a` · `#181624` · `#23203a` · `#facc15` · `#713f12`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h2 18px · h3 20px · body 13px
- **Weights in use:** semibold, bold, extrabold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px)
- **Content width:** `max-w-[600px]`
- **Common gaps:** `gap-3`

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #14121a;
  --color-text: #9ca3af;
  --color-border: #22213a;
  --color-accent: #fde047;
  --color-accent-2: #23203a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#14121a',
    ink: '#9ca3af',
    line: '#22213a',
    accent: '#fde047',
    accent2: '#23203a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#fde047) for the title, the barcode and the seat value only
- **Do:** Keep labels small and grey, with values in white
- **Do:** Keep the ticket shape with a stub edge and rounded corners
- **Don't:** Don't add photography to the ticket; it is type and shape only
- **Don't:** Don't use yellow for body text
- **Don't:** Don't put a second bright colour on the stub

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
