## 📍 Overview

The nextjs-wordpress-blog project is a JavaScript application built with the Next.js framework and TypeScript, and it is configured with various tools for professional development.

This includes Tailwind CSS and PostCSS for styling and cross-browser compatibility.

The main application is a blog that fetches data from a WordPress API and displays it in a modern and responsive layout.

Next.js SSR (Server-Side Rendering) is used to improve SEO and performance.

Designs are simple and clean, with a focus on readability and user experience.

All WordPress API requests are centralized in the `@/lib/api.ts` file, and the application is organized into components and pages.

Post, User, and Media interfaces are defined in the `@/interfaces` folder, containing only the necessary fields for the application.

---

## 🚀 Getting Started

**_Dependencies_**

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Node.js (20.x)`

### 🔧 Installation

1. Clone the nextjs-wordpress-blog repository:

```sh
git clone https://github.com/leonardocavalcanti/nextjs-wordpress-blog
```

2. Change to the project directory:

```sh
cd nextjs-wordpress-blog
```

3. Copy the `.env.example` file to `.env` and update the variables:

```sh
cp .env.example .env
```

4. Install the dependencies:

```sh
npm install
```

### 🤖 Running nextjs-wordpress-blog

```sh
npm run dev
```

You can now access nextjs-wordpress-blog at http://localhost:3000