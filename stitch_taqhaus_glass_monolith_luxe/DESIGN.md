# Design System Strategy: Modern Noir & Stealth Luxury

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** It represents a shift from the typical "SaaS-lite" aesthetic into a world of high-end editorial precision and "Stealth Luxury." This is not an interface meant to be skimmed; it is an environment to be inhabited. 

By blending the moody, deep maroons of "Modern Noir" with the architectural whitespace of high-fashion layouts, we create an experience that feels both authoritative and expensive. We break the "template" look through **intentional asymmetry**—offsetting grid elements and using varying card heights—while maintaining a rigorous typographic hierarchy. The focus is on tactile depth, where content feels layered rather than flat, and the signature "Hint of Orange" (#FF5722) acts as a surgical strike of color in an otherwise monochromatic, high-contrast landscape.

---

## 2. Colors
Our palette is rooted in deep, obsidian tones and rich burgundies, providing a sophisticated backdrop for high-impact data.

*   **Primary Foundation:** Use `primary_container` (#800f35) for thematic sections. This deep maroon is our signature "Noir" anchor.
*   **The Stealth Accent:** `secondary` (#ffb5a0) and `tertiary` (#eabdac) provide the soft, "off-white" counterpoint that prevents the dark theme from feeling heavy.
*   **The High-Impact Strike:** Use `#FF5722` (mapped to high-priority `on_secondary_container` actions) exclusively for conversion points. It should be the only vibrant color on the screen.

### Layout Principles:
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Definition must be achieved through background shifts. For example, a `surface_container_low` section should sit against a `surface` background to create a boundary through value, not lines.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. Use the `surface_container` tiers (Lowest to Highest) to "lift" content. A dashboard card should be `surface_container_highest` set against a `surface_container_low` sidebar.
*   **The "Glass & Gradient" Rule:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a 20px backdrop-blur. 
*   **Signature Textures:** Apply a subtle linear gradient from `primary` (#ffb2be) to `primary_container` (#800f35) on primary CTAs to add a "satin" finish that feels premium.

---

## 3. Typography
The typography is the "Voice" of the brand. We pair a timeless Serif for authority with a precision Sans-Serif for utility.

*   **Display & Headlines (Noto Serif):** Used for large-scale editorial moments. The serif choice conveys the "Luxury" aspect. Use `display-lg` (3.5rem) with tighter tracking (-0.02em) for hero sections.
*   **Titles & Body (Plus Jakarta Sans):** Our workhorse font. It is modern, clean, and highly legible. Use `title-lg` for card headers to maintain a professional, tech-forward feel.
*   **Labels (Inter):** Reserved for high-density data and micro-copy. Its neutral character ensures that complex metrics remain the focus without adding visual "noise."

---

## 4. Elevation & Depth
In this system, depth is a matter of light and shadow, not lines.

*   **The Layering Principle:** Stacking `surface_container` tiers creates a natural "staircase" of importance. Higher-priority items should always move toward `surface_bright`.
*   **Ambient Shadows:** Floating elements must use "Environmental Shadows." Use a 24px to 48px blur with only 4-6% opacity. The shadow color should be a deep burgundy-tinted version of `surface_container_lowest` rather than pure black, ensuring the "Noir" vibe remains cohesive.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` token at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use backdrop-blur (16px+) on top-level navigation bars. This allows the "Modern Noir" colors to bleed through as the user scrolls, creating a sense of continuity and fluid space.

---

## 5. Components

### Buttons
*   **Primary:** Solid `#FF5722` with `on_secondary_fixed` text. Roundedness: `md` (0.375rem).
*   **Secondary:** `surface_container_highest` background with a `ghost border`. 
*   **Tertiary:** Text-only using `primary` (#ffb2be) with a subtle underline on hover.

### Modular Service Cards
*   **Construction:** Use `surface_container_low` for the card body. 
*   **Spacing:** Use `spacing-8` (2.75rem) for internal padding to ensure "Stealth Luxury" breathing room.
*   **Interaction:** On hover, shift the background to `surface_container_high`. No movement or lift; the change should be tonal and subtle.

### Data Metrics
*   **Density:** High-density metrics should be grouped in `surface_container_lowest` wells. 
*   **Typography:** Use `label-md` (Inter) for labels and `title-lg` (Plus Jakarta Sans) for the values.
*   **Separation:** Use `spacing-4` gaps instead of divider lines.

### Input Fields
*   **Style:** Minimalist. No background fill—only a bottom "Ghost Border" using `outline_variant`. 
*   **Focus State:** The bottom border transitions to `#FF5722`.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins (e.g., more padding on the left than the right in hero sections) to create an editorial feel.
*   **Do** lean into the "Hint of Orange." Use it sparingly like a high-end watch complication.
*   **Do** use `display-lg` typography for impactful statements, even if the text is short.
*   **Do** utilize `spacing-16` and `spacing-20` for section breaks to let the design breathe.

### Don't
*   **Don't** use pure black (#000000). Always use the `surface` or `surface_container` tokens to maintain the "Noir" warmth.
*   **Don't** use standard "Drop Shadows." If an element doesn't look right with tonal layering, reconsider its hierarchy.
*   **Don't** use 1px dividers to separate list items. Use vertical whitespace (`spacing-3` or `spacing-4`).
*   **Don't** use the accent orange for anything other than primary actions. Never use it for decorative icons or secondary text.