# Design system — Digital Web Agency Landing Page Template

`SN-W01556` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white ground with near-black IBM Plex Sans headlines at very large size, and one word per headline set in blue (#0f62fe) as the only accent. Small monospace labels with slash-separated numbers, such as 01 // WEB APPS, and a grey status column on the right give it a technical, engineering-document tone. Blocks are flat with hairline rules, and the blue is spent sparingly so the type does the work.

**Mood:** technical, precise, flat, engineered, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#161616` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#0f62fe` | Primary action and highlights |

Palette by frequency of use: `#0f62fe` · `#ffffff` · `#d1d5db` · `#6b7280` · `#161616` · `#9ca3af` · `#374151` · `#1f2937` · `#f9fafb` · `#f4f4f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Sans
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Mono, IBM Plex Sans
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-[#0f62fe] text-white px-10 py-5 text-sm font-mono tracking-wide hover:bg-[#0043ce] transition-colors w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Bento grid (`bento-grid`)
5. Articles (`blog-articles`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #161616;
  --color-text: #161616;
  --color-muted: #ffffff;
  --color-border: #d1d5db;
  --color-accent: #0f62fe;
  --font-display: "IBM Plex Sans", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#161616',
    ink: '#161616',
    muted: '#ffffff',
    line: '#d1d5db',
    accent: '#0f62fe',
  },
  fontFamily: { display: ['IBM Plex Sans'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in IBM Plex Sans at display size with tight leading
- **Do:** Use the blue (#0f62fe) on one highlighted word per headline only
- **Do:** Label sections with monospace text and slash-numbered prefixes
- **Don't:** Don't use blue for backgrounds or large fills; keep it to text accents
- **Don't:** Don't add rounded decorative shapes; the layout uses rules and square panels
- **Don't:** Don't replace the monospace labels with sans-serif captions

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
