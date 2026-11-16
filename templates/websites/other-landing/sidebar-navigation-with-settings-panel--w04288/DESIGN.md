# Design system — Sidebar Navigation with Settings Panel

`SN-W04288` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep navy settings screen with a sidebar and a large panel of form fields. Inputs are dark indigo with thin lilac borders, and the active navigation item is a solid indigo block (#312e81). A purple (#9333ea) save button is the one bright action, and translucent layered panels with backdrop blur keep the screen restrained.

**Mood:** layered, dark, polished, indigo

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#312e81` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#312e81` · `#3730a3` · `#9ca3af` · `#4338ca` · `#9333ea` · `#a855f7` · `#d1d5db` · `#4f46e5` · `#7e22ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 20px · h2 20px · body 14px
- **Weights in use:** semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Common gaps:** `gap-6`, `gap-4`

**Primary button**

```html
<a class="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-accent: #312e81;
  --color-accent-2: #7f1d1d;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    muted: '#9ca3af',
    accent: '#312e81',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the active navigation item as a solid indigo (#312e81) block
- **Do:** Use dark indigo fields with thin lilac borders for inputs
- **Do:** Reserve the purple save button for the one primary action in each form
- **Don't:** Don't add bright colour to the field labels
- **Don't:** Don't make the form panels opaque white
- **Don't:** Don't use more than one solid purple button in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
