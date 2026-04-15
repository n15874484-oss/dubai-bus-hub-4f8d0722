

# Amplitude Bus Management System — Dubai Fleet (60 Buses)

## Overview
A beautiful, animated dashboard for managing 60 Dubai-based buses. It shows all buses in a grid, highlights expiring subscriptions in red, and includes a notification system for upcoming expirations.

## Branding
- Colors inspired by Amplitude Services: **Red (#E53935)** as primary/accent, **dark navy (#1A1A2E)** as background, white text
- Amplitude logo text in the header with the red "A" branding
- Modern dark-themed dashboard feel

## Pages & Features

### 1. Dashboard (Main Page)
- **Header**: Amplitude Services branding, navigation, notification bell icon with badge count
- **Stats Bar**: Total buses, active subscriptions, expiring soon (warning), expired (danger)
- **Bus Grid**: 60 bus cards in a responsive grid (4-5 columns on desktop, 2 on tablet, 1 on mobile)
- **Search & Filter**: Filter by status (All / Active / Expiring Soon / Expired), search by plate number or bus name

### 2. Bus Cards
Each card shows:
- Stock image of a Dubai bus
- Bus number & plate number (Dubai format, e.g., "Dubai A 12345")
- Status badge (Active = green, Expiring Soon = amber, Expired = red)
- On **hover**: card expands/flips with smooth animation showing full details:
  - License number, RTO registration
  - Insurance start/end dates
  - Route permit validity
  - Fitness certificate expiry
  - Subscription start & end dates
  - Owner/operator info
  - Last service date
- Cards with expired/expiring subscriptions have a **red border glow** animation

### 3. Notification System
- Bell icon in header with unread count badge
- Dropdown panel listing hardcoded notifications like:
  - "Bus #12 insurance expires in 3 days"
  - "Bus #45 route permit expired!"
  - "Bus #28 fitness certificate renewal due"
- Notifications color-coded: red (expired), amber (expiring soon), blue (info)
- Smooth slide-in animation

### 4. Animations & UI Polish
- Staggered fade-in for bus cards on page load
- Hover scale + shadow elevation on cards
- Smooth flip/expand animation on hover for details
- Pulsing red glow on expired buses
- Notification panel slide-down animation
- Smooth filter transitions

### Data
All 60 buses will have hardcoded realistic data with Dubai-style plate numbers, varied expiration dates (some expired, some expiring soon, some active) to demonstrate the color-coding system.

