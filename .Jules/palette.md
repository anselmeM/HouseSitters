## 2024-10-26 - Material Icons & Accessibility
**Learning:** Material Icons ligatures (e.g., `<span ...>menu</span>`) are not reliable accessible names. They may be read as text by some screen readers but don't convey the button's action (e.g., "Open menu").
**Action:** Always pair icon-only buttons using Material Icons with explicit `aria-label` attributes to ensure clarity for screen reader users.
