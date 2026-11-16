# Design system — CounterOS Service Workflow Template

`SN-W03872` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A utilitarian, data-dense workspace on a white canvas: a left intake sidebar, a central job panel and a right parts list, all set in small IBM Plex Sans with thin grey rules between them. Status is carried by small badges in amber and green, and the top bar holds the case context in uppercase. The look is a working tool rather than a marketing page.

**Mood:** utilitarian, dense, technical, precise, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Sans
- **Body:** IBM Plex Sans
- **Loaded families:** Barlow Semi Condensed, IBM Plex Sans, IBM Plex Mono
- **Scale (largest breakpoint):** h1 24px · h2 12px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full text-left px-3 py-2 text-sm font-bold font-condensed uppercase tracking-wider text-primary bg-module border border-border rounded hover:bg-raised transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "IBM Plex Sans", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['IBM Plex Sans'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Set all interface text in IBM Plex Sans at small sizes with clear labels
- **Do:** Separate panels with thin grey rules rather than colour fills
- **Do:** Show job status with small amber or green badges next to each item
- **Don't:** Don't use large display headlines; the type scale stays small
- **Don't:** Don't add decorative imagery; the page is a working tool
- **Don't:** Don't use colour for items that carry no status; reserve it for badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
