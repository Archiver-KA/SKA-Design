# Design system — Industrial Inventory Portal Template

`SN-W03949` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, minimal portal on a near-black ground (#000000). A centred card holds a title, three role selectors and one full-width button, so the single gold tone marks the only action. Labels are small, widely tracked uppercase, which keeps the interface quiet and utilitarian.

**Mood:** dark, utilitarian, quiet, focused, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#3a3a3a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#3a3a3a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font)
- **Body:** var(--font)

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Sign-in form (`auth-form`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #3a3a3a;
  --font-display: "var(--font)", sans-serif;
  --font-body: "var(--font)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#3a3a3a',
  },
  fontFamily: { display: ['var(--font)'], sans: ['var(--font)'] },
} }
```

## Do and don't

- **Do:** Keep the page ground near-black (#000000) with a centred card
- **Do:** Use the gold tone only for the primary button and the selected role
- **Do:** Set labels in small, widely tracked uppercase
- **Don't:** Don't add decorative imagery behind the login card
- **Don't:** Don't use light card backgrounds on this dark ground
- **Don't:** Don't add more than one saturated colour to the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."

_Extracted from part of the source: the page bundles very large scripts._
