# Devansh Enterprise - Murti Store

A demo e-commerce website for selling murtis (idols/statues) by Devansh Enterprise.

## Features

- Responsive modern design
- Product catalog
- Add to Cart (front-end demo, JS only)
- Modal cart view
- Easy customization for your own products

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ashutoshshah098-alt/devansh-enterprise-murti-store.git
cd devansh-enterprise-murti-store
```

### 2. Add Product Images

Place your images in the `images/` folder.  
Recommended:  
- `ganesh.jpg`
- `laxmi.jpg`
- `shiv.jpg`
- `hanuman.jpg`

You can update `app.js` and `index.html` to add, remove, or rename products as you like.

### 3. Run Locally

#### Option A: Open `index.html` directly

Just double-click `index.html` to view in your browser.

#### Option B: Run a local server (recommended for JS/CSS)

With Node.js & Express:

```bash
npm install express
```

Create `server.js`:

```js
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

Run:

```bash
node server.js
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Deploy Online

- You can deploy this static site easily on [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting.
- For GitHub Pages:  
  - Commit your files to the main branch  
  - Go to repo Settings → Pages → Source: select `main` branch, `/root`  
  - Your site will be live at `https://ashutoshshah098-alt.github.io/devansh-enterprise-murti-store/`

## Notes

- This is a static front-end demo (no real backend, no payments).
- For production, integrate a backend and payment gateway.

---

Feel free to customize this template for your own needs!
