# GlobeGo — Android-friendly prototype

A responsive, installable web-app prototype for virtual travel discovery.

## Included in this ZIP
- Luxury travel-magazine visual style
- Five working sections: Discover, Explore, Atlas, Films and Saved
- Eight sample destinations: Amalfi Coast, Kyoto, Maldives, Taj Mahal, Banff, Paris, Petra and Santorini
- Search and category filters
- Clickable illustrated atlas pins
- Destination detail sheets with facts
- Save/bookmark places (stored locally on the device)
- Drag-to-look panorama *simulation*
- Travel-film search links
- PWA manifest and service worker for install/offline app shell

## Important prototype limitations
- No user accounts, cloud sync, payments or real ad network are connected.
- The atlas is an illustrative clickable map, not GPS navigation.
- The panorama interaction is a visual demo, not a true 360° tour.
- Images are loaded from Unsplash image URLs and need internet access. Check the current licence/terms and use assets you have permission to publish before launch.
- Film cards open YouTube search results; GlobeGo does not host those videos.
- Offline support caches the app shell; external photos may not be available offline.

## Run on Android
### Easiest: SPCK Editor
1. Extract the ZIP.
2. In SPCK, create/open a project and import the extracted folder (or copy `index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js`, and `assets/`).
3. Open `index.html` in the preview.
4. Keep internet on for the sample photography.

### Run through a local server
If you have a terminal:
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in a browser on the same device.

Service workers and PWA install generally require HTTPS or localhost. A direct `file://` preview may not support install/offline features.

## Install as an app
After publishing the project to an HTTPS host (for example, a static hosting provider), open the site in Chrome on Android → browser menu → **Install app** or **Add to Home screen** (wording varies).

## Suggested next build stages
1. Replace sample images with a curated, documented set of licensed destination photographs.
2. Add a real 360° viewer using a maintained panorama library and licensed equirectangular images.
3. Build a small backend for destination metadata, editorial collections and optional user accounts.
4. Add map tiles through a provider whose terms allow your usage; show attribution and respect rate limits.
5. Add privacy-friendly analytics only after writing a clear privacy notice and collecting only necessary data.
6. Add optional premium features such as offline tour packs, curated audio guides or ad-free browsing.
7. Add age-appropriate, contextual advertising only after checking the ad provider's eligibility, consent and child/teen policies. Do not profile minors or collect precise location for ad targeting.
8. Test performance, accessibility, image rights, privacy and security before public release.

## Monetisation reality
A free app with optional premium features can earn, but revenue is not automatic. Ads require eligible traffic, policy compliance and advertiser demand. Premium conversion also depends on clear extra value. Keep the basic exploration experience useful for free.
