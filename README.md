# iONTEK Project GridShield™ Safe Zone — Philippines Edition v3.1.0 (Build SZ-20260831-PH-INT)

**A public safety Progressive Web App (PWA):** any user opens the link, taps
**Locate Me**, and the app finds the nearest safe zone from a verified registry,
draws the direction line, and hands off to live turn-by-turn road navigation.
Installable to the phone home screen; app shell works offline.

## Files

| File | Purpose |
|---|---|
| `index.html` | The app: map UI, geolocation, nearest-safe-zone algorithm (haversine ranking, top-3), routing hand-off, PWA install |
| `safezones.json` | Safe-zone registry — **edit this file** to update evacuation centers, no code change needed |
| `manifest.webmanifest` | PWA identity: name, icons, standalone display |
| `sw.js` | Service worker: offline app shell + map-tile cache fallback |
| `icons/` | App icons (192px, 512px) |

## Deploy (any static host)

1. Upload the whole folder to any HTTPS static host (e.g., your own
   iontek.com.ph hosting, GitHub Pages, Netlify, Cloudflare Pages).
   **HTTPS is required** — browsers only allow geolocation and service
   workers on secure origins.
2. Share the URL. On Android/Chrome an "Install SafeRoute" bar appears;
   on iOS/Safari users tap Share → Add to Home Screen.
3. **Before public launch:** replace the DEMO dataset in `safezones.json`
   with an LGU/DRRMO-verified evacuation center registry.

## Safety design notes

- Geolocation with manual tap-the-map fallback (no-GPS / permission-denied cases)
- Registry loaded from `safezones.json` with embedded fallback if fetch fails
- Straight-line ranking is labeled indicative; actual road navigation is
  delegated to the user's map application via the "Road to take" button
- 911 call button always visible; flooded-road warning in EN/Filipino

## Intellectual property notice

© 2026 **Milagrosa Russelle P. Ballestar** — iONTEK Power Solutions
Corporation, GridShield™ Division. 4 Purple St., Concepcion Dos, Marikina
City 1811, Philippines. SEC Reg. No. CS202001609. All Rights Reserved.

Source code, algorithms, and system architecture framework protected under
RA 8293 (Intellectual Property Code of the Philippines). Version and build
identifiers (v1.0.0 / SR-20260830) are embedded in source headers for
registration and deposit purposes. Unauthorized reproduction, modification,
or distribution is prohibited.

*Basemap data © OpenStreetMap contributors (ODbL); Leaflet © its authors
(BSD-2). Third-party components retain their own licenses.*

## v2.1.0 FINAL — what's included

- **Nearest Safe Zone mode** — Locate Me / tap map → top-3 nearest anchors (haversine ranking), route line, live turn-by-turn hand-off
- **Go Home Safe mode** — user-chosen destination anywhere in the national registry (Luzon / Visayas / Mindanao), with a long-haul corridor hazard reminder
- **UP NOAH integration** — NOAH button opens hazard maps (flood, landslide, storm surge); footer links to noah.up.edu.ph and the UP NOAH iOS app
- **Public Declaration of IP Ownership** — ⓘ IP button in-app + PUBLIC_DECLARATION.md
- **PWA** — installable on iOS (Share → Add to Home Screen) and Android (Install bar); offline app shell via service worker
- **Registry** — `safezones.json`, 33 national anchors, editable without code changes

Registry anchors are approximate city-center coordinates. Always confirm designated evacuation centers with your Barangay/City/Municipal DRRMO.

## One-click Activate (iOS + Android)

`install.html` is the public launcher. Share THIS link (e.g. `https://your-host/safezone/install.html`):
- **Android/Chrome:** one tap on **Activate** triggers the native install prompt.
- **iOS/Safari:** one tap shows the 3-step Add-to-Home-Screen sheet (Apple does not allow programmatic PWA install).
- **Desktop:** one click shows a QR code of the page for phone scanning.

### Go live in 3 steps (free, HTTPS)
1. Create a GitHub repository and upload all files in this folder.
2. Settings → Pages → Deploy from branch (main, root). Wait ~1 minute.
3. Share `https://<username>.github.io/<repo>/install.html`. Print the QR shown on desktop for posters/flyers.
