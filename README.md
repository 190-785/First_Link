
# First Link Rule

An interactive project exploring the traversal of Wikipedia articles based on the "First Link Rule" — the idea that clicking the first link of any Wikipedia article repeatedly often leads to the *Philosophy* page. Built with React, Vite, and Tailwind CSS for a fast, modern user experience.

[Live Demo](https://first-link-delta.vercel.app)

---

## Table of Contents

- [About the Project](#about-the-project)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [How It Works](#how-it-works)  
- [Custom Tailwind Configuration](#custom-tailwind-configuration)  
- [Project Structure](#project-structure)  
- [License](#license)  
- [Acknowledgments](#acknowledgments)  

---

## About the Project

**First Link Rule** simulates Wikipedia article traversal by always following the first link in the main text. It visualizes how most topics eventually converge on the *Philosophy* page, while smartly avoiding loops and dead ends.

---

## Features

- **Live Traversal**: Input any Wikipedia URL and watch the path to Philosophy.  
- **React + Vite**: Instant HMR, fast rebuilds, and strict ESLint rules.  
- **Custom Tailwind Theme**: Branded purple palette for a cohesive UI.  
- **Deploy Anywhere**: Ready for Vercel, Netlify, or any static‑hosting service.  

---

## Tech Stack

- **Frontend**: React.js + Vite (TypeScript-ready)  
- **Styling**: Tailwind CSS with extended theme  
- **API**: Direct calls to Wikipedia’s REST API  
- **Deployment**: Vercel (demo link above)  

---

## Setup & Installation

### Prerequisites

- Node.js v14 or higher  
- npm or yarn  

### Local Development

```bash
# Clone this repo
git clone https://github.com/190-785/First_Link.git
cd First_Link

# Install dependencies
npm install

# Start dev server
npm run dev
````

Open your browser at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview   # serve the production build locally
```

---

## How It Works

1. **User Input**: Enter a valid Wikipedia article URL.
2. **First Link Fetch**: The app retrieves the first in‑article link via the Wikipedia API.
3. **Iterative Traversal**: Follows each first link, tracking visited pages to prevent loops.
4. **Termination**: Stops when it hits the *Philosophy* page or detects a cycle/dead‑end.
5. **Visualization**: Renders the full path in a clean, interactive UI.

---

## Custom Tailwind Configuration

Extended in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        darkPurple: '#433878',
        mediumPurple: '#7e60bf',
        lightPurple: '#e4b1f0',
        palePurple: '#ffe1ff',
      },
    },
  },
};
```

Use directly in your markup:

```html
<div class="bg-darkPurple text-palePurple p-4">
  First Link Rule
</div>
```

---

## Project Structure

```plaintext
First_Link/
├── public/               # Static assets
├── src/                  # React source code
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level views
│   └── main.jsx          # Entry point
├── .gitignore
├── LICENSE               # GNU GPL v3.0 license
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## License

This project is licensed under the **GNU General Public License v3.0**.
See the [LICENSE](LICENSE) file for full terms. ([GitHub][1])

---

## Acknowledgments

* Inspired by [Not David’s “First Link Rule” video](https://youtu.be/-llumS2rA8I?feature=shared).
* Powered by Wikipedia’s open REST API.

```

Feel free to adjust any paths or commands based on your exact front‑end setup. Let me know if you need badges (e.g., license, build status) or any extra sections!
::contentReference[oaicite:1]{index=1}
```

[1]: https://github.com/190-785/First_Link "GitHub - 190-785/First_Link: FIrst Link RUle Project"
