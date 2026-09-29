# MediaSearch

A media search app built with React, Vite and Redux. Search photos, videos and GIFs from three sources in one place, then save your favorites to a collection that persists between visits.

## Features

- Search **photos** (Unsplash), **videos** (Pexels) and **GIFs** (Klipy) with a tabbed interface
- Save and remove items from a personal collection, stored in `localStorage`
- Toast notifications when you add or remove items
- Loading skeletons, empty states and readable error messages
- Videos preview on hover
- Responsive grid layout

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Redux Toolkit](https://redux-toolkit.js.org) and React Redux for state
- [React Router](https://reactrouter.com) for navigation
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Axios](https://axios-http.com) for API requests
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your API keys

Create a `.env` file in the project root:

```env
VITE_UNSPLASH_KEY=your_unsplash_access_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_KLIPY_KEY=your_klipy_api_key
```

Get keys from:

- Unsplash: https://unsplash.com/developers
- Pexels: https://www.pexels.com/api/
- Klipy: https://klipy.com

Restart the dev server after changing `.env`.

### 3. Run the app

```bash
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
```

## Project structure

```
src/
├── api/
│   └── mediaApi.js          # Unsplash, Pexels and Klipy requests
├── components/
│   ├── CollectionCard.jsx   # Card used on the collection page
│   ├── MediaCard.jsx        # Shared card UI (image / video / GIF)
│   ├── Navbar.jsx
│   ├── ResultCard.jsx       # Card used in search results
│   ├── ResultGrid.jsx       # Fetches and displays results
│   ├── SearchBar.jsx
│   └── Tabs.jsx             # Photos / Videos / GIFs switcher
├── pages/
│   ├── CollectionPage.jsx
│   └── HomePage.jsx
├── redux/
│   ├── features/
│   │   ├── collectionSlice.js   # Saved items + toasts
│   │   └── searchSlice.js       # Query, tab, results, loading, error
│   └── store.js
├── App.jsx
├── index.css                # Tailwind import, theme colors and fonts
└── main.jsx
```

## How it works

1. `SearchBar` stores the query in the `search` slice.
2. `ResultGrid` watches the query and active tab, calls the matching API, and normalizes every result into the same shape:
   `{ id, type, title, thumbnail, src, url }`.
3. `ResultCard` and `CollectionCard` render that shape through `MediaCard`.
4. The `collection` slice saves items to `localStorage` so they survive a refresh.

## Customizing the theme

Colors and fonts are defined in the `@theme` block in `src/index.css`:

```css
--color-ink: #0b1220; /* page background */
--color-panel: #131c2e; /* cards and inputs */
--color-line: #24304a; /* borders */
--color-accent: #f5b83d; /* buttons and highlights */
```
