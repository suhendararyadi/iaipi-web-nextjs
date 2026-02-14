# Design: UI/UX Polish & Mobile Navigation

## Status: Approved
## Date: 2026-02-14

## Problem
1. **Branding Inconsistency:** Colors (green, yellow, navy) are scattered across components without a central source of truth, leading to slight variations and maintenance difficulty.
2. **Mobile UX:** Standard navigation on mobile can be cumbersome for one-handed use. A more accessible navigation pattern is needed for smartphone users.

## Proposed Solution

### 1. Centralized Branding (CSS Variables)
Define a global color palette in `src/app/globals.css` using CSS variables to ensure consistency across all current and future components.

**Palette:**
- `--iaipi-green`: #006a4e (Primary Branding)
- `--iaipi-yellow`: #ffc600 (Secondary/Accent)
- `--iaipi-navy`: #07294d (Deep Blue/Backgrounds)

### 2. Mobile Bottom Navigation
Implement a **Fixed Bottom Navigation Bar** specifically for mobile devices (screen width < 768px).

**Features:**
- **Placement:** Fixed at the bottom of the viewport.
- **Style:** Solid background (Green or Navy) with 20% transparency/blur.
- **Items:**
  1. Home (Beranda)
  2. News (Berita)
  3. Admissions (PMB)
  4. Portal (SIAKAD)
- **UI:** Simple icons with short text labels.

### 3. Layout Optimization
- Review and fix any element clipping on small screens.
- Ensure the new Modern Slider height is proportional on mobile devices.

## Validation Criteria
- [ ] All primary branding elements (buttons, links, active states) use CSS variables.
- [ ] Bottom navigation bar is visible only on mobile screens.
- [ ] Clicking bottom nav items leads to correct routes/external links.
- [ ] No layout shifts or overlapping elements on mobile browsers.
