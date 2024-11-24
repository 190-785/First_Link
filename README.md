# Wikipedia's First Link Rule  

An engaging project exploring the traversal of Wikipedia articles based on the "First Link Rule," suggesting that consistently following the first link on Wikipedia articles often leads to the 'Philosophy' page. Built using React, Vite, and Tailwind CSS with custom themes for a modern, seamless experience.  

---

## Table of Contents  
- [About the Project](#about-the-project)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup and Installation](#setup-and-installation)  
- [How It Works](#how-it-works)  
- [Custom Tailwind Configuration](#custom-tailwind-configuration)  
- [Project Structure](#project-structure)  
- [License](#license)  
- [Acknowledgments](#acknowledgments)  

---

## About the Project  

The **Wikipedia's First Link Rule** project demonstrates Wikipedia article traversal based on curated paths, avoiding loops or dead ends. The frontend is powered by React + Vite for a fast and developer-friendly experience, styled with a custom Tailwind CSS theme.  

### Predefined Paths  
The project navigates predefined paths for topics such as:  
- Physics  
- Language  
- Psychology  
- Sports  
- Biology  
- History  
- India  

### Objectives  
- Simulate the First Link Rule algorithmically.  
- Prevent loops and dead ends using iterative traversal.  
- Showcase efficient integration of APIs with modular frontend-backend communication.  

---

## Features  

- **Dynamic Wikipedia Traversal**: Navigate articles using predefined paths.  
- **React + Vite**: Efficient builds, HMR, and ESLint rules.  
- **Custom Tailwind Theme**: Personalized branding with beautiful purple tones.  
- **Modern Deployment**: Dockerized services with Vercel and Render.  

---

## Tech Stack  

- **Frontend**: React.js with Vite, hosted on Vercel.  
- **Styling**: Tailwind CSS with a custom theme.  
- **Backend**: Node.js with Express, hosted on Render.  
- **Infrastructure**: Dockerized for seamless deployment.  
- **APIs**: Wikipedia API for data fetching and parsing.  

---

## Setup and Installation  

### Prerequisites  
- Docker installed on your system.  
- Node.js and npm/yarn installed for local development.  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/190-785/wikipedia-link-rule  
   cd wikipedia-link-rule  
   ```  

2. Install backend dependencies:  
   ```bash  
   cd backend  
   npm install  
   npm start  
   ```  

3. Install frontend dependencies:  
   ```bash  
   cd ../frontend  
   npm install  
   npm run dev  
   ```  

4. Access the application at `http://localhost:5173`.  

---

## How It Works  

1. Users input a starting Wikipedia URL.  
2. The backend fetches the first link using the Wikipedia API.  
3. The app compares links with predefined paths.  
4. Traversal continues until the *Philosophy* page (or equivalent) is reached or traversal halts.  
5. Loops and dead ends are avoided by tracking visited pages.  

---

## Custom Tailwind Configuration  

The Tailwind CSS theme is extended with the following color palette for consistent branding:  

```javascript  
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

### Usage Example  

These custom colors can be used directly in your application:  

```html  
<div class="bg-darkPurple text-palePurple p-4">First Link Rule</div>  
```  

---

## Project Structure  

```plaintext  
wikipedia-link-rule/  
├── backend/  
│   ├── routes/       # API routes  
│   ├── controllers/  # Logic for Wikipedia traversal  
│   ├── models/       # Data structures for path handling  
│   └── app.js        # Backend entry point  
├── frontend/  
│   ├── src/  
│   │   ├── components/  # React components  
│   │   ├── pages/       # App pages  
│   │   └── App.js       # Frontend entry point  
├── docker-compose.yml  # Docker configuration  
└── README.md           # Documentation  
```  

---

## License  

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.  

---

## Acknowledgments  

- Inspired by the video by [Not David](https://youtu.be/-llumS2rA8I?feature=shared).  
- Special thanks to Wikipedia's open API.  

--- 
