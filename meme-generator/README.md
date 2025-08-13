# Meme Generator

[![Meme Generator Screenshot](https://i.postimg.cc/SKDjmv15/Screenshot-2025-08-13-093239.png)](https://meme-generator-eta-henna.vercel.app/)



## Live Deployment

<a href="https://meme-generator-eta-henna.vercel.app/" target="_blank" title="LinkedIn">
        <img src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-live-streaming-icons-red-symbols-and-buttons-of-png-image_5954160.jpg" width="50" alt="live deployement icon" />
</a>
  
---

## About

A simple and fun **Meme Generator** built with React. Users can add custom text to memes fetched from a popular meme API, preview them live, and download the final image.

This project uses:

- React for UI  
- Tailwind CSS for styling  
- `html2canvas` for rendering memes as downloadable images  
- Styled Components for scoped styling  
- Uiverse components for buttons and UI elements  
- **Imgflip API** for meme templates

The app also **generates a new meme image whenever you click the "Get a new image" button**, allowing users to browse different meme templates instantly.

---

## API

This project fetches meme templates from the **Imgflip API**, which provides a large collection of popular meme images. The API endpoint used:
```

https://api.imgflip.com/get_memes

```

## Features

- Live preview of meme with custom top and bottom text  
- Download meme as image (PNG)  
- Responsive design using Tailwind CSS  
- Easy-to-use UI with styled buttons and components  

---

## Tech Stack

- **React** - Frontend framework  
- **Tailwind CSS** - Utility-first CSS framework  
- **html2canvas** - Capture DOM elements as images  
- **Styled Components** - CSS-in-JS styling  

---

## Installation & Setup

```bash
git clone https://github.com/aaliyanexe/Meme-Generator.git
cd Meme-Generator
npm install
npm run dev
```

Open ```http://localhost:3000```  to view the project in the browser.

---

## Usage

1. Enter your text in the top and bottom input fields.  
2. The text will appear on the meme image below.  
3. Click the **Download** button to save the meme as a PNG.
4. 
---

## File Structure

```
  meme-generator/
  ├── node_modules/
  ├── public/
  │   ├── default-meme.jpg
  │   └── image-removebg-preview.png
  ├── src/
  │   ├── components/
  │   │   ├── Button.jsx
  │   │   ├── Footer.jsx
  │   │   ├── Header.jsx
  │   │   └── Inner.jsx
  │   ├── App.jsx
  │   ├── index.css
  │   └── main.jsx
  ├── .eslint.config.js
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── README.md
  └── vite.config.js
```

---


## 🤝 Connect with Me

<p align="center" style="gap: 24px; display: flex; justify-content: center; align-items: center;">

  <a href="https://www.linkedin.com/in/ahmed-aaliyan-98a046327" target="_blank" title="LinkedIn">
    <img src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" width="50" alt="LinkedIn icon" />
  </a>

  <a href="mailto:ahmedaaliyan.dev@gmail.com" target="_blank" title="Email">
    <img src="https://camo.githubusercontent.com/91120ade5b1709cfa800428330efdd7370351bcb51b3f139534c3a45f053a6f8/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3130302669643d717952704167676e56307a4826666f726d61743d706e6726636f6c6f723d303030303030" width="50" alt="Gmail icon" />
  </a>

  <a href="https://x.com/AaliyanDevX" target="_blank" title="Twitter/X">
    <img src="https://img.icons8.com/ios11/512/4D4D4D/twitterx--v2.png" width="50" alt="Twitter/X icon" />
  </a>

  <a href="https://dev.to/aaliyanexe" target="_blank" title="Dev.to">
    <img src="https://img.icons8.com/?size=512&id=n98knU41v5Aq&format=png" width="50" alt="Dev.to icon" />
  </a>

</p>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---




