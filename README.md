# Novans Jets — Private Aircraft Services

A luxury private aviation website for **Novans Jets**, an international aviation group offering private jet and helicopter charter, aircraft sales, leasing, management, and maintenance services worldwide.

## About the Project

This is a single-page marketing website built with **HTML**, **CSS**, and **JavaScript** — no build tools or frameworks required. It features:

- **Interactive hero section** — a real photo background of a luxury FBO terminal with clickable aircraft silhouettes on the tarmac; hover or click any aircraft to see its category, specifications, and available services.
- **Real photography backgrounds** — every section uses authentic aviation photos (terminal views, boarding, tarmac, cabin interiors) to immerse visitors in the private flight experience.
- **Responsive design** — fully optimised for desktop, tablet, and mobile screens.
- **Smooth animations** — scroll-triggered reveals, expanding service cards, and interactive tooltips.
- **Quote request form** — allows visitors to submit trip details for a quick response.

## Project Structure

```
Private-aircraft-services-/
├── index.html              # Main website page
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles (layout, colours, typography, responsive)
│   ├── js/
│   │   └── main.js         # Interactive functionality (menu, tooltips, animations)
│   └── images/             # Local image assets (if any)
├── README.md               # This file
└── report.md               # Design research and competitor analysis
```

## How to Run Locally

This is a static website — no installation, compilation, or server software is needed. Follow these steps:

### Option 1: Open directly in your browser

1. **Download or clone** this repository:
   ```bash
   git clone https://github.com/zillionsHQ/Private-aircraft-services-.git
   ```
2. **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, Edge):
   - On **macOS**: double-click `index.html` or run `open index.html`
   - On **Windows**: double-click `index.html` or run `start index.html`
   - On **Linux**: run `xdg-open index.html`

### Option 2: Use a local development server (recommended)

A local server avoids potential issues with file paths and provides a URL you can share on your local network.

**Using Python** (comes pre-installed on macOS and most Linux distributions):
```bash
# Navigate to the project folder
cd Private-aircraft-services-

# Start a server on port 8000
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

**Using Node.js** (if installed):
```bash
# Install a simple static server globally (one-time)
npm install -g serve

# Start serving the project
serve .
```
Then open the URL shown in the terminal (typically [http://localhost:3000](http://localhost:3000)).

**Using VS Code**:
1. Install the **Live Server** extension from the Extensions panel.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site opens automatically in your default browser and reloads when you save changes.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout (Flexbox & Grid), animations, responsive design |
| JavaScript (ES5+) | Interactivity — mobile menu, tooltips, scroll animations, form handling |
| Google Fonts | Typography — Cormorant Garamond (headings) and Raleway (body) |
| Unsplash | Royalty-free photography used for section backgrounds |

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge (latest two major versions). Internet Explorer is not supported.

## License

All rights reserved © 2026 Novans Jets. Photography sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license).
