# Design: Modern Hybrid Slider for IAIPI Web

## Status: Approved
## Date: 2026-02-14

## Problem
The current slider based on Slick (jQuery) has inconsistent navigation behavior in the Next.js App Router environment. Navigation arrows disappear or malfunction on hover, and there is a lack of clear visual feedback for slide progression.

## Goal
Replace the legacy Slick slider with a modern, React-friendly solution (Swiper.js) that features a custom text-based navigation with progress indicators for better UI/UX.

## Proposed Solution: Hybrid Text-Progress Navigation
Instead of traditional arrows, we will use a horizontal row of titles below the banner. Each title will serve as a navigation link and a progress indicator.

### 1. Technology Stack
- **Engine:** Swiper.js (React components).
- **Styling:** CSS Modules or Global CSS (IAIPI colors: #07294d blue, #ffc600 yellow).
- **Optimization:** `next/image` for all slides.

### 2. UI/UX Specifications
- **Titles:**
  1. Pendaftaran
  2. Profil Kampus
  3. Kegiatan
  4. Fasilitas
  5. Akademik
- **Interaction:**
  - Clicking a title navigates directly to that slide.
  - Active title is highlighted (Yellow color + Bold).
  - A 4px progress bar below the active title fills up during the 5s autoplay duration.
- **Responsiveness:**
  - Desktop: 5 titles in a row.
  - Mobile: Scrollable horizontal list or condensed indicators.

### 3. Implementation Plan
- Install `swiper` dependency.
- Create a new `ModernSlider` component (or replace `Slider.js`).
- Remove jQuery Slick dependencies from the Slider component.
- Implement synchronized Swiper and Progress Bar logic.

## Validation Criteria
- [ ] Auto-play correctly moves through all 5 slides.
- [ ] Progress bar resets and starts on every slide change.
- [ ] Clicking a title switches to the correct slide immediately.
- [ ] No layout shift during loading (Next/Image priority).
