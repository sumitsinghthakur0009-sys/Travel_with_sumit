# GlobeGo — Version 5 🌍

**The world is closer than you think.**

GlobeGo is a mobile-friendly virtual travel discovery prototype with a luxury travel-magazine visual style. Explore destinations, browse a clickable illustrated atlas, discover travel films, and save places to a personal collection.

## Preview

This repository contains the frontend prototype. It is built with plain HTML, CSS and JavaScript, so there is no build step or package installation required.

## Version 5 additions

- Sample day-by-day itinerary builder for all eight featured destinations
- Choose trip length and travel mood
- Save generated sample plans locally on the current device
- Creator story credits Sumit Dangi as founder and creator

## Version 6 additions — Paris in 3D

- New `paris.html`, `paris.css` and `paris.js`: an interactive 3D Paris built with Three.js (loaded from cdnjs)
- Drag to orbit, pinch or scroll to zoom, tap a landmark chip to fly to the Eiffel Tower, Arc de Triomphe, Louvre pyramid or Notre-Dame
- Day and night modes, with lit windows, a sparkling tower and a rotating beacon at night
- A 4K photo gallery: thumbnails load small sizes, tapping a photo opens it at 3840 px wide
- Opening Paris in the app now shows **Enter Paris in 3D**
- The 3D city is a stylised model, not to scale and not a map
- Photos come from Unsplash and are credited to their photographers; check the current Unsplash License before publishing or monetising

## Features

- Responsive design for Android phones, tablets and desktop
- Discover homepage with editorial destination cards
- Eight sample destinations: Amalfi Coast, Kyoto, Maldives, Taj Mahal, Banff, Paris, Petra and Santorini
- Search and category filters
- Clickable illustrated atlas pins
- Destination detail modal with travel facts
- Save/bookmark destinations using browser local storage
- Travel film discovery links
- Drag-to-look panorama interaction (visual simulation)
- PWA manifest and service worker for an installable app shell

## Run locally

### Option 1: SPCK Editor on Android

1. Download this repository as a ZIP or clone it.
2. Extract the project.
3. Open/import the project folder in SPCK Editor.
4. Open `index.html` in the preview.
5. Keep an internet connection active for remote sample photographs.

### Option 2: Local web server

From the project directory, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

> Service workers and PWA installation generally require HTTPS or localhost. Opening the HTML file directly with `file://` may not enable those features.

## Install on Android

After deploying the project to an HTTPS host, open the website in Chrome on Android. Use the browser menu and choose **Install app** or **Add to Home screen** (the wording can vary).

## Project structure

```text
globego-virtual-travel/
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── sw.js
├── paris.html
├── paris.css
├── paris.js
├── assets/
│   └── icon.svg
├── README.md
├── LICENSE
└── .gitignore
```

## Planner notes

The itinerary builder creates sample inspiration only. It does not verify opening hours, route distances, current safety conditions, transport, prices or availability. Saved plans stay in the current browser's local storage and are not synced.

## Important limitations

This is an early frontend prototype, not a production travel platform.

- The atlas is an illustrative map, not a live map or navigation service.
- The panorama is a simulated horizontal image interaction, not a true 360° tour.
- There is no backend, login, cloud sync, payment system or ad network.
- Destination photos load from remote Unsplash image URLs and need an internet connection.
- Film links open YouTube search results; GlobeGo does not host those videos.
- Offline caching covers the app shell; remote images may not be available offline.

## Roadmap

1. Replace demo imagery with a curated library of assets whose licences permit the intended use.
2. Integrate a maintained 360° panorama viewer and licensed equirectangular imagery.
3. Add real map data from a provider whose usage terms, attribution and rate limits are followed.
4. Build a backend for destination content and optional accounts.
5. Add accessibility, performance, security and privacy testing.
6. Consider optional premium features such as downloadable tour packs or audio guides.
7. Consider age-appropriate, contextual advertising only after checking provider eligibility, consent requirements and policies. Do not profile minors or collect precise location for ad targeting.

## Monetisation

The intended model is free core exploration with optional premium features. Advertising revenue is not guaranteed and depends on eligible traffic, advertiser demand and policy compliance. Premium features should add genuine value without making basic exploration unusable.

## Image, video and font rights

The source code licence does not grant rights to third-party media. Before publishing or monetising, verify the current licence and terms for every photograph, video, font and other asset. Replace any asset you cannot legally use.

## Contributing

Issues and pull requests are welcome. For substantial changes, open an issue first to discuss what you would like to improve.

## Licence

The project source code is released under the MIT License. Third-party media and trademarks remain subject to their respective owners' terms.
