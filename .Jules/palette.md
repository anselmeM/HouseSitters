## 2024-10-26 - Material Icons & Accessibility
**Learning:** Material Icons ligatures (e.g., `<span ...>menu</span>`) are not reliable accessible names. They may be read as text by some screen readers but don't convey the button's action (e.g., "Open menu").
**Action:** Always pair icon-only buttons using Material Icons with explicit `aria-label` attributes to ensure clarity for screen reader users.

## 2024-05-22 - Interactive Cards & Keyboard Access
**Learning:** Using `div`s with `cursor-pointer` for card components makes them inaccessible to keyboard users (no tab stop) and screen readers (no role).
**Action:** Convert interactive cards to `<a>` or `<button>` tags and ensure visible focus states (e.g., `focus:ring`) are added for keyboard navigation.

## 2024-10-27 - Focus Visibility & Brand Consistency
**Learning:** Default browser focus rings are inconsistent and often clash with custom designs. Tailwind's utility classes allow for `focus-visible` rings that match the brand identity (e.g., `ring-primary`) without cluttering the UI for mouse users.
**Action:** Apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary` to all interactive elements to ensure keyboard accessibility aligns with the visual design system.
**Exception:** For elements with a background color matching the primary brand color (e.g., `bg-primary`), use a contrasting ring color (e.g., `ring-white`) to ensure the focus indicator remains visible.
